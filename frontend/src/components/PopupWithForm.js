import React from "react";
function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <form
        onSubmit={props.onSubmit}
        name={`popup__container_type_${props.name}`}
        className={`popup__container popup__container_type_${props.name}`}
      >
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close popup__close_type_edit"
        ></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button
          className={`popup__button popup__button_type_${props.name}`}
          type="submit"
        >
          {props.buttonText}
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
