const UrlParser = {
  // Parse the active URL and combine its parts into a single string
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSplitter(url);
    return this._urlCombiner(splittedUrl);
  },

  // Parse the active URL without combining its parts, returning an object
  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  // Split the URL into its components (resource, id, verb)
  _urlSplitter(url) {
    const urlSplits = url.split('/');
    return {
      resource: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verb: urlSplits[3] || null,
    };
  },

  // Combine the URL components into a single string
  _urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/')
            + (splittedUrl.id ? '/:id' : '')
            + (splittedUrl.verb ? `/${splittedUrl.verb}` : '');
  },
};

export default UrlParser;
