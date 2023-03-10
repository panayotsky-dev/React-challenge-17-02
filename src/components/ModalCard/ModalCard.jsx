function ModalCard({ name, image, firstTag, secondTag, instructions, onClose,ingredients }) {
    return (
      <div className="modal-overlay"onClick={onClose}>
      <div className="modal">
      <div class="modal-aside modal-aside-1">
          <img className="modal-image" alt={name} src={process.env.PUBLIC_URL + image} />
          <div className="ingridient-holder">
              <h3>Ingridients:</h3>
              <div className="ingridient-one"> <p>👉 {ingredients}</p> </div>
              <div className="ingridient-one"> <p>👉 {ingredients}</p> </div>
              <div className="ingridient-one"> <p>👉 {ingredients}</p> </div>
              <div className="ingridient-one"> <p>👉 {ingredients}</p> </div>
            </div>
      </div>

      <div class="modal-main">
      {/* <button className="close-button" > X </button> */}
      <h2>{name}</h2>
        <button className="play-video">
        <div class="side1 side"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2832 13.9331L13.2614 9.5557C13.0404 9.39551 12.747 9.37138 12.5048 9.49587C12.2607 9.61939 12.1082 9.8703 12.1082 10.1415V18.8933C12.1082 19.1674 12.2607 19.4173 12.5048 19.5408C12.6081 19.5929 12.721 19.619 12.8349 19.619C12.9835 19.619 13.134 19.5717 13.2614 19.4781L19.2832 15.1046C19.4733 14.9647 19.5842 14.7485 19.5842 14.5188C19.5852 14.2853 19.4713 14.0701 19.2832 13.9331Z" fill="white"/>
<path d="M14.5005 0.00201416C6.49077 0.00201416 0 6.49278 0 14.5025C0 22.5093 6.49077 28.9982 14.5005 28.9982C22.5083 28.9982 29 22.5084 29 14.5025C29.001 6.49278 22.5083 0.00201416 14.5005 0.00201416ZM14.5005 26.5788C7.83022 26.5788 2.42222 21.1737 2.42222 14.5025C2.42222 7.83417 7.83022 2.4223 14.5005 2.4223C21.1698 2.4223 26.5768 7.8332 26.5768 14.5025C26.5778 21.1737 21.1698 26.5788 14.5005 26.5788Z" fill="white"/>
</svg></div>
         <div class="side2 side">Play video</div>
          </button>
        <h3>Instructions:</h3>
        <p>{instructions}</p>
        <div className="tag-holder">
          <div className="recipe-tag">{firstTag}</div>{" "}
          <div className="recipe-tag">{secondTag}</div>
        </div>
      </div>
        

      </div>
    </div>
    );
  }
  export default ModalCard