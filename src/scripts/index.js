import intlTelInput from 'intl-tel-input';
import IMask from 'imask';
import  'virtual-select-plugin/dist/virtual-select'
import { AttachFile } from './services/AttachFile';
import { IndexedDbService } from './services/IndexedDbService';
import { Spinner } from './services/Spinner';
import { MultiForm } from './services/MultiForm';
import { Form } from './services/Form';

import '../styles/index.scss';

async function initApp(){

   const courseFormWrapper = document.querySelector('.course-form')
   const courseForm = courseFormWrapper.querySelector('#course-form')
   const informationStepper = courseFormWrapper.querySelector('#informations-stepper');
   const informationSteps = informationStepper.querySelectorAll('.informations-stepper__item');
   const sessionFromStorage = localStorage.getItem(`COURSE_FORM_STEP-${window.location.pathname}`);
   
   function deleteActiveInformationSteps(){
    informationSteps.forEach(step => step.classList.remove('informations-stepper__item-active'));
   }
   
    function activeInformationStep(step){
        step.classList.add('informations-stepper__item-active');
    }
   
   if(courseForm) {
    const userInfo = new IndexedDbService('userInfo', 1, {
            upgrade(db) {
            db.createObjectStore('userInfo');
            },
    });
   
    let user = null;
    let step = 0;
   
    if(sessionFromStorage){
        const userSession = JSON.parse(sessionFromStorage);
   
        const currentDate = Date.now();
        const createdDate = userSession.created_date;
        const elapsedTime = currentDate - createdDate; 
        const elapsedMinutes = elapsedTime / (1000 * 60);// translate to minutes;
        const remainingTimeInMinutes = 30
   
        console.log('ellapsed', elapsedMinutes >= remainingTimeInMinutes);
   
        const continueStep = informationSteps[0];
        const expiresStep = informationSteps[1];
        const successStep = informationSteps[2];
   
        if(userSession.isFullyRegistrationSuccess){
            deleteActiveInformationSteps();
            activeInformationStep(successStep);
            toggleRenderForm();
            courseForm.remove();
   
            return;
        }
   
   
        if(elapsedMinutes >= remainingTimeInMinutes){
            deleteActiveInformationSteps();
            activeInformationStep(expiresStep)
            toggleRenderForm();
            courseForm.remove();
   
        } else {
            deleteActiveInformationSteps();
            activeInformationStep(continueStep);
   
            step = userSession.step;
            user = await userInfo.get('info')
            toggleRenderForm();
        }
    }
   
    let userInfoFromSession = {
        user,
        step
    }
   
    await courseFormLogic(userInfoFromSession);
   } 
   
   async function courseFormLogic(userInfoFromSession){
        const userFromSession = userInfoFromSession.user;
        const stepFromSession = userInfoFromSession.step
        const userInfoIndexedDb = window['idb-userInfo'];
        const phoneMaskField =  courseForm.querySelector('#mobile-number');
        const phoneIti = initMaskForPhoneInput(phoneMaskField);

        const educationSelect = '#education-select'
        const englishLevelSelect = '#english-level-select'
        const yearSelect = '#year-select'
        const $educationSelect = courseForm.querySelector(educationSelect);
        const $englishLevelSelect = courseForm.querySelector(englishLevelSelect);
        const $yearSelect = courseForm.querySelector(yearSelect);
   
        
        const englishLevelSelectOptions = [
            {
                label: 'A1',
                value: '4'
            },
            {
                label: 'A2',
                value: '5'
            },
            {
                label: 'B1',
                value: '6'
            },
            {
                label: 'B2',
                value: '7'
            },
            {
                label: 'C1',
                value: '8'
            },
            {
                label: 'C2',
                value: '9'
            },
        ]
   
        const yearSelectOptions = [
            {
                label: '1',
                value: '1'
            },
            {
                label: '2',
                value: '2'
            },
            {
                label: '3',
                value: '3'
            },
            {
                label: '4',
                value: '4'
            },
        ]
   
   
         VirtualSelect.init({
             ele: $englishLevelSelect,
             multiple: false,
             search: false,
             required: true,
             hideClearButton: true,
             name: 'english-level',
             placeholder: 'English level',
             options: englishLevelSelectOptions,
             showDropboxAsPopup: false
         });
   
         VirtualSelect.init({
            ele: $educationSelect,
            multiple: false,
            search: false,
            required: false,
            hideClearButton: true,
            name: 'education-institution',
            placeholder: 'Educational Institution',
            options: [],
            allowNewOption: true,
            showDropboxAsPopup: false
         });
   
         VirtualSelect.init({
            ele: $yearSelect,
            multiple: false,
            search: false,
            required: true,
            hideClearButton: true,
            name: 'year',
            placeholder: 'Year',
            options: yearSelectOptions,
            showDropboxAsPopup: false
        });

     const multiForm = new MultiForm('course-form', {
         currentStep: stepFromSession || 0,
         handleSuccessNextStep: async (formData, currentStep) => {
             console.log('currentStep', currentStep)
             const btnByCurrentStep = courseForm.querySelector(`[data-step="${currentStep + 1}"]`)
             const userData = userFromSession ? { ...userFromSession, ...formData } : formData;
             console.log('btnByCurrentStep', btnByCurrentStep)
             const allUserData =  await userInfoIndexedDb.get('info');

             const data = {...allUserData, ...userData}
             await userInfoIndexedDb.set('info', data);
             console.log('allUserData', allUserData)
             console.log('data', data)
             localStorage.setItem(`COURSE_FORM_STEP-${window.location.pathname}`, JSON.stringify({
                 created_date: Date.now(),   
                 step: currentStep + 1,
                 isFullyRegistrationSuccess: false
             }));
         
             Spinner.showSpinner();

             try {

                 await sendUserInfo(data);

             } catch (error) {
                 
             }finally{
               Spinner.hideSpinner();
             }
   
         },
         handleSubmit: async (formData, currentStep) => {
             const userData = userFromSession ? {...userFromSession, ...formData} : formData;
 
             const allUserData =  await userInfoIndexedDb.get('info');

             let data = { ...allUserData }

             if(currentStep === 2){   //! third step, but index 2
                 const additionalQuestions = {}

                 Object.entries(formData).forEach(([name, value]) => {
                     additionalQuestions[name] = value
                 })
                 data = {
                     ...allUserData, 
                     "additional_questions": additionalQuestions
                 };
             }else{
                 data = {...allUserData, ...userData};
             }
              


             await userInfoIndexedDb.set('info', {...allUserData, ...userData});
               
             localStorage.setItem(`COURSE_FORM_STEP-${window.location.pathname}`, JSON.stringify({
                 created_date: Date.now(),   
                 step: currentStep,
                 isFullyRegistrationSuccess: false
             }));

             showSpinner();

             try {
                 await sendUserInfo(data) 
         
                 const successStep = informationSteps[2];

                 deleteActiveInformationSteps();
                 activeInformationStep(successStep);
                 toggleRenderForm()
                 courseForm.remove();

                 localStorage.setItem(`COURSE_FORM_STEP-${window.location.pathname}`, JSON.stringify({
                     created_date: Date.now(),   
                     step: currentStep,
                     isFullyRegistrationSuccess: true
                 }));

                 await userInfoIndexedDb.del('info');
             } catch (error) {
                 
             }finally{
                 hideSpinner();
             }
         },
         setValueOnInit: (input, valueFromInitData) => {
             if(input.type === 'tel'){
                 phoneIti.setNumber(valueFromInitData);
             }

             if(input.type === 'file') {
                 const fileData = userFromSession?.[input.name] || null;

                 if(!fileData) return;
                 
                 file.setSuccessfulyUploadedStatus(fileData)
             }
         },
         initFormData: userFromSession
     });

      const file = new AttachFile('upload-file', {
         handleChangeValidateInput: (fileInput) => {
            console.log('multiForm', multiForm)
             const { error, errorMessage } = multiForm.handleValidateInput(fileInput);
             console.log('INVALID FILE', error, errorMessage)
             if(!!error){
                 throw new Error(errorMessage);
             }
         
         },
         handleSuccessAttach: (fileInput) => {
            multiForm.setSuccessRequire(fileInput);
         },
         handleCanceled: (fileInput) => {
            multiForm.removeSuccessRequire(fileInput)
         }
     });
   
        
       async function sendUserInfo(data){
            const body = new FormData();
   
            Object.entries(data).forEach(([name, value]) => {
   
                if( data[name] instanceof File){
                    body.append(name, value);
   
                    return;
                }
   
                if(typeof data[name] === 'object'){
                    body.append(name, JSON.stringify(value));
   
                    return;
                }
   
                body.append(name, value)
            });
   
      
          return await $.ajax({
                url: `${window.location.origin}/wp-json/course_form/v1/save`,
                type: 'POST',
                data: body,
                processData: false,
                contentType: false,
                success: async function (response) {
   
                  
                },
                error: function (rejectResponse) {
                    
                }
            })
        }
   
   
        function handleInformationSteps(e){
            const target = e.target;
   
            if(!target.matches('[data-btn]')) return;
   
            const btn = target.dataset.btn
   
            const continueBtn = btn === 'continue'
            const cancelBtn =  btn === 'cancel' //??? what happen when i click cancel btn????
   
   
            if(continueBtn){
                toggleRenderForm();
            }
        }
   
        function initMaskForPhoneInput(phoneInput){
            if(!phoneInput) return;
   
            const phoneIti =  intlTelInput(phoneInput, {
                        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
                        allowDropdown: true,
                        autoHideDialCode: false,
                        autoPlaceholder: "aggressive",
                        customPlaceholder: null,
                        dropdownContainer: null,
                        formatOnDisplay: true,
                        geoIpLookup: async function (callback) {
                          const req = await fetch('https://ipinfo.io');
                          console.log('req', req)
                        //   const res = await req.json();
                        //   console.log('res.country', res)
                        //   const countryCode = (res && res.country) ? res.country : 'hu'
                        //   callback(countryCode)
                           callback('hu')

                        },
                        hiddenInput: "",
                        initialCountry: "auto",
                        localizedCountries: null,
                        nationalMode: false,
                        onlyCountries: [],
                        placeholderNumberType: "MOBILE",
                        preferredCountries: ["hu"],
                        excludeCountries: ["ru"],
                        separateDialCode: false,
            });
   
            phoneIti.promise.then(() => {
               const plus = '+';
               const defaultMask = `${plus}000000000000`
               const instance = setMask(phoneInput, `${plus}000000000000`);
   
               function updateMask(){
                    const placeholder = phoneInput.getAttribute('placeholder');
                    let mask = plus;
   
                    if(!!placeholder && !!placeholder.length){
                        const value = placeholder.replaceAll('-', ' ')
                        let cleanPhoneMask =  value.replace(/\D+/g, '').split('').map(() => '0').join('')
                        mask = `${plus}${cleanPhoneMask}`
                    }
   
                    instance.updateOptions({ mask: !placeholder ? defaultMask : mask });
               }
   
                updateMask();
   
                phoneInput.addEventListener('input', updateMask)
            })
   
            function setMask(input, mask){
   
                return window.IMask(
                    input, {
                    mask,
                    placeholderChar: '_',
                    lazy: false
                }); 
            }
   
            return phoneIti
        }
   
        function initMaskForDateInput() {
            const dateOfBirthMaskField =  courseForm.querySelector('#date-of-birth');
            if(!dateOfBirthMaskField) return;
            
                IMask(
                dateOfBirthMaskField, {
                    mask: Date,
                    pattern: 'YYYY.MM.DD',
                    blocks: {
                        YYYY: {
                        mask: IMask.MaskedRange,
                        from: 1900,
                        to: 9999
                        },
                        MM: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 12
                        },
                        DD: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 31
                        }
                    },
                    format: function (date) {
                        let day = date.getDate();
                        let month = date.getMonth() + 1;
                        let year = date.getFullYear();
                        
                            if (day < 10) {
                            day = '0' + day;
                            }
                            if (month < 10) {
                            month = '0' + month;
                            }
                        
                        return year + '.' + month + '.' + day;
                    },
                    parse: function (str) {
                        const yearMonthDay = str.split('.');
                        const year = parseInt(yearMonthDay[0], 10);
                        const month = parseInt(yearMonthDay[1], 10) - 1;
                        const day = parseInt(yearMonthDay[2], 10);
                    
                        return new Date(year, month, day);
                    }
            });
   
        return dateOfBirthMaskField
        }
   
   
        
        initMaskForDateInput();

        informationStepper.addEventListener('click', handleInformationSteps)
    }
   
   
    function toggleRenderForm(){
        courseForm.classList.toggle('hide');
        informationStepper.classList.toggle('hide');
    }
   
}


initApp();