import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../components/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;

    return (
      <Fade bottom>
        <section className="container" key={`category-${index1}`}>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="row">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item col-sm-3 py-2"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={300 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}

                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={
                            item.imageId[0]
                              ? `https://admin-bwamern.herokuapp.com/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>

                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/properties/${item._id}`}
                          className="stretched-link d-block text-gray-800"
                        >
                          <h5 className="h4">{item.title}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </section>
      </Fade>
    );
  });
}
