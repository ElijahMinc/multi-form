
# MultiForm

Once upon a time, I developed my own form builder to automate and simplify routine tasks. It has always intrigued me to not only mindlessly use third-party libraries but also to be able to write my own, from scratch.
And now, I've decided to share with you one of my old projects — a form builder developed in native JavaScript! 🌟
## Installation

There is currently no special package to install these features as a library. 

However! 

You can copy the required functionality, which can be found in the following paths!
```bash
  git clone https://github.com/ElijahMinc/multi-form.git
```
For test example: 

```bash
  yarn install
```
After that: 

```bash
   yarn dev
```
or 

```bash
   git checkout feature/demo
   yarn dev:demo
```


All the necessary functionality is located in the services folder:

```bash
  cd ./src/services
```



## Features

- Simple Validation: Seamless validation of mandatory and optional fields with customizable parameters.

- Flexibility: Customize your own validation rules according to your needs.

- User Insights: Track user interactions with each field to better understand their behavior.

- File Attachments: Enable file attachment functionality using our built-in attachment constructor.

- Data Persistence: Even after page reloads or exits, the form fields retain their initial values.

- Multi-step Forms: Want to divide your form into multiple steps? This feature is available! The form can consist of multiple stages, and each stage can contain a plethora of different fields.

## Simple Base/Example

### HTML
```html
<!-- YOUR FORM ID NEAR-->
<form id="form" class="resume__form-content form-content">
          <div class="form__title">A mind-bogglingly simple example</div>
          <div class="form-content__body">

              <!-- important class="form__step form__step-active" data-step="1"-->
            <div class="form__step form__step-active" data-step="1">

                <!-- important fields-block -->
              <fieldset class="fields-block">
                <!-- If you want to have a required field:  -->
                <!-- <label class="fields-block__input _require _field"> -->

                <!-- If you want to have an optional field, but which you want to validate:   -->
                   <!-- <label class="fields-block__input _validate _field"> -->

                <!-- If you do not want to have a required field  -->
                <label class="fields-block__input _field">
                  <input
                    type="text"
                    name="first_name"
                    maxlength="64"
                    placeholder=" "
                  />
                  <span class="fields-block__placeholder">First name</span>
                  <span class="fields-block__no-valid-message"></span>
                </label>
              </fieldset>

              <fieldset class="fields-block">
                <label class="fields-block__input _require _field">
                  <input
                    type="email"
                    class="form-field"
                    name="email"
                    data-email
                    maxlength="256"
                    placeholder=" "
                  />
                  <span class="fields-block__placeholder">Email</span>
                  <span class="fields-block__no-valid-message"></span>
                </label>
              </fieldset>

              <div class="form-content__footer">
                  <!-- 
                1) It is important to label the current level on the button with data-btn-step={{{your_current_step}}}

                2) It is important to mark the button type: 
    * submit - click will validate the button and submit form
    * prev - on click the button will return to the previous step
    * next - on click validation will take place and in case of success the form will go to the next step 

-->
                <button
                  type="button"
                  class="btn btn_blue"
                  data-btn="submit"
                  data-btn-step="1"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
```
### JavaScript
```javascript
import { MultiFormService } from '../services/MultiFormService';

// All you need to do is call an instance of MultiFormService with your form ID wrapped in your form wrapper
const instance = new MultiFormService('form', {
    handleSubmit: (formData) => {
      console.log('formData', formData);
    },
});

```

## Documentation

### Classes responsible for button validation:

* **_require** - required field to be validated.

* **_validate** - If you want the field to be optional, but still validated. For example, for the email field.

### Mandatory attributes:

```html
<!-- IMPORTANT TEMPLATE -->
<form id={{formId}}>
    <!-- by default form step is 1 -->
    <div class="form__step form_step-active" data-step="{{form_step}}">
        {{your_form_content}}     
    </div>
</form> 
```

* Example with REQUIRED field:
```html
<!-- IMPORTANT FIELD WRAPPER-->
 <fieldset class="fields-block">
     <!-- IMPORTANT _field and _required classes -->
        <label class="fields-block__input _require _field">
            <input
                type="text"
                name="field_name"
                placeholder=" "
            />
            <span class="fields-block__placeholder">
                Field name
            </span>
    <!-- SPAN FOR ERROR MESSAGE -->
            <span class="fields-block__no-valid-message"></span>
        </label>
</fieldset>
```

* Example with NOT required, but MUST validate field:
```html
<!-- IMPORTANT FIELD WRAPPER-->
 <fieldset class="fields-block">
     <!-- IMPORTANT _field and _validate classes -->
        <label class="fields-block__input _validate _field">
            <input
                type="text"
                name="field_name"
                placeholder=" "
            />
            <span class="fields-block__placeholder">
                Field name
            </span>
    <!-- SPAN FOR ERROR MESSAGE -->
            <span class="fields-block__no-valid-message"></span>
        </label>
</fieldset>
```

* Example with NOT required field:
```html
<!-- IMPORTANT FIELD WRAPPER-->
 <fieldset class="fields-block">
     <!-- IMPORTANT _field and _validate classes -->
        <label class="fields-block__input _validate _field">
            <input
                type="text"
                name="field_name"
                placeholder=" "
            />
            <span class="fields-block__placeholder">
                Field name
            </span>
    <!-- SPAN FOR ERROR MESSAGE -->
            <span class="fields-block__no-valid-message"></span>
        </label>
</fieldset>
```

### Mandatory attributes for submit button:

```html
<!-- 
    data-btn="submit" 
    data-btn="next"
    data-btn="prev"
    -->
    <button
        type="button"
        class="btn btn_blue"
        data-btn="submit"
        data-btn-step="{{current_form_step}}"
    >
        SUBMIT | PREV | NEXT - ACTIONS
    </button>

```