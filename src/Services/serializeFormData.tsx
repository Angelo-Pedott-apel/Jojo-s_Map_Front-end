function serializeFormData(form) {
    if (!form || form.nodeName !== "FORM") return;
    return Array.from(form.elements)
      .filter(elem => elem.name !== "")
      .map(elem => {
        switch (elem.nodeName) {
          case "INPUT":
            switch (elem.type) {
              case "text":
              case "hidden":
              case "password":
              case "button":
              case "reset":
              case "submit":
                return `${elem.name}=${encodeURIComponent(elem.value)}`;
              case "checkbox":
              case "radio":
                if (elem.checked) return `${elem.name}=${encodeURIComponent(elem.value)}`;
                break;
              case "file":
                break;
            }
            break;
          case "TEXTAREA":
            return `${elem.name}=${encodeURIComponent(elem.value)}`;
          case "SELECT":
            switch (elem.type) {
              case "select-one":
                return `${elem.name}=${encodeURIComponent(elem.value)}`;
              case "select-multiple":
                return Array.from(elem.options)
                  .filter(opt => opt.selected)
                  .map(opt => `${elem.name}=${encodeURIComponent(opt.value)}`)
                  .join("&");
            }
            break;
          case "BUTTON":
            switch (elem.type) {
              case "reset":
              case "submit":
              case "button":
                return `${elem.name}=${encodeURIComponent(elem.value)}`;
            }
            break;
        }
      })
      .filter(Boolean)
      .join("&");
  }

  export default serializeFormData;