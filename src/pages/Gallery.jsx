import React from "react";
import ContentLoader from "react-content-loader";

function Gallery({ isLoading = true }) {
  return (
    <div className="content p-40">
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="389" height="460" />
        </ContentLoader>
      ) : (
        <>
          <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
              <h1>Галерея</h1>
            </div>

            <div className="d-flex flex-wrap justify-between">
              <p>
                <img width={389} height={460} src="img/11.jpg" alt="фото1" />
              </p>
              <p>
                <img width={389} height={460} src="img/12.jpg" alt="фото2" />
              </p>
              <p>
                <img width={389} height={460} src="img/13.jpg" alt="фото3" />
              </p>
              <p>
                <img width={389} height={460} src="img/14.jpg" alt="фото4" />
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;
