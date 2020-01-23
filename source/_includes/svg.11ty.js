class Svg {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      permalink: data => `/${data.page.fileSlug}.svg`
    };
  }

  render(data) {
    // will always be "Ted"
   // console.log(data)
    return data.content;
  }
}

module.exports = Svg;
