renderLinks = categories => {
    if (!!categories) {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      );
    } else if (categories) {
      categories.map(category => {
        return (
          <li key={category[0].id} className="menu__links link-font">
            <Link to={`/articles/${category[0].category}`}>
              {getCategoriesTitle(category)}
            </Link>
          </li>
        );
      });
    }
  };


  if (!!categories) {
      renderCat = (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      );
    } else if (categories) {
      console.log(categories);
      renderCat = categories.map(category => (
        <li key={category[0].id} className="menu__links link-font">
          <Link to={`/articles/${category[0].category}`}>
            {getCategoriesTitle(category)}
          </Link>
        </li>
      ));
    }