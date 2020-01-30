import React, { Component } from "react";
import Category from "./Category";
// import CategoryItem from "./CategoryItem";

class Categories extends Component {
  state = {
    cats: [
      {
        MindAndBody: [
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          }
        ]
      },
      {
        Education: [
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          }
        ]
      },
      {
        Finance: [
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          },
          {
            title: "The secret Treat",
            author: "Amber Nicole",
            imgUrl: "some image"
          }
        ]
      }
    ]
  };

  // after we get products from db
  // componentDidMount() {
  //call to action for all categories
  // TODO: this.props.getCategories
  // }

  render() {
    const { cats } = this.state;

    // let showCats;

    // if (cats === null) {
    //   showCats = <div>Loading</div>; // TODO: Show spinner
    // } else {
    //   showCats = <Category categories={cats} />;
    // }

    return (
      <div>
        {!cats ? (
          <div>Loading</div> // TODO: Show spinner
        ) : (
          <Category categories={cats} />
          //   cats.map((categories, index) => (
          //     <div>
          //       <Category key={index} categories={categories} />
          //     </div>
          //   ))
        )}
        {/* <div>{showCats}</div> */}
      </div>
    );
  }
}

export default Categories;
