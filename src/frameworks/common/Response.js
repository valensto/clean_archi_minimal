module.exports.Response = class Response {
  constructor({ success = false, error = null, content = null }) {
    this.success = success;
    this.error = error;
    this.content = content;
  }
};

module.exports.ResponseError = class ResponseError {
  constructor({ status, content, url, ip }) {
    this.status = status;
    this.content = content;
    this.url = url;
    this.ip = ip;
  }
};
