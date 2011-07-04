(function() {
  describe("autolink", function() {
    it("can be called on a string", function() {
      return expect("hi there".autoLink()).toBeDefined();
    });
    it("returns the string with the URLs hyperlinked", function() {
      return expect("Check out this search engine http://google.com".autoLink()).toEqual("Check out this search engine <a href='http://google.com'>" + "http://google.com</a>");
    });
    it("does not hyperlink additional non-URL text", function() {
      return expect("LMSTFY: http://google.com and RTFM".autoLink()).toEqual("LMSTFY: <a href='http://google.com'>http://google.com</a> and RTFM");
    });
    it("correctly hyperlinks URLs, regardless of TLD", function() {
      return expect("Click here http://bit.ly/1337 now".autoLink()).toEqual("Click here <a href='http://bit.ly/1337'>http://bit.ly/1337</a> now");
    });
    it("correctly hyperlinks URLs, regardless of subdomain", function() {
      return expect("Check it: http://some.sub.domain".autoLink()).toEqual("Check it: <a href='http://some.sub.domain'>http://some.sub.domain</a>");
    });
    it("correctly handles punctuation", function() {
      return expect("Go here now http://google.com!".autoLink()).toEqual("Go here now <a href='http://google.com'>http://google.com</a>!");
    });
    it("sets link attributes based on the options provided", function() {
      return expect("Google it: http://google.com".autoLink({
        target: "_blank"
      })).toEqual("Google it: <a href='http://google.com' target='_blank'>" + "http://google.com</a>");
    });
    return it("sets multiple link attributes if more than one is given", function() {
      return expect("Google it: http://google.com".autoLink({
        target: "_blank",
        rel: "nofollow"
      })).toEqual("Google it: <a href='http://google.com' target='_blank' rel='nofollow'>" + "http://google.com</a>");
    });
  });
}).call(this);
