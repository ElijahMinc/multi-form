export class UserService {
  static async sendUserData(data) {
    const body = new FormData();

    Object.entries(data).forEach(([name, value]) => {
      if (data[name] instanceof File) {
        body.append(name, value);

        return;
      }

      if (typeof data[name] === 'object') {
        body.append(name, JSON.stringify(value));

        return;
      }

      body.append(name, value);
    });

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(body);
      }, 3000);
    });
  }
}
