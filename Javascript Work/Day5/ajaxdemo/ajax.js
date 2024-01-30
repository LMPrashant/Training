function load(URL) {
    return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
          resolve(this.response);
        } else {
          reject(this.status);
        }
      };
      request.open('GET', URL, true);
      request.send();
    });
  }

