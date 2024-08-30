import React, { useRef, useState } from "react";
import "./ContactsForm.scss";
import { useAppDispatch } from "../../custom-hooks/reduxHooks.ts";
import { setContactsForm } from "../../redux/slices/projects.slice.ts";
import cn from "classnames";
import { createNewClient } from "../../api/clients.ts";

export const ContactsForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [joinTeam, setJoinTeam] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cvlink, setCvlink] = useState("");
  const [comment, setComment] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cvlinkError, setCvlinkError] = useState("");

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmitForm = (name, phone, email, comment) => {
    if (name || phone || email) {
      if (!name) {
        setNameError("please enter the name");
      }
      if (!phone) {
        setPhoneError("please enter the phone");
      }
      if (!email) {
        setEmailError("please enter the email");
      }

      return;
    }

    const newClient = {
      name,
      phone,
      email,
      comment,
    };

    createNewClient(newClient).then((client) => console.log(client));

    form.current?.reset();
  };

  const handleClickCloseContact = () => {
    document.body.style.overflow = "auto";
    dispatch(setContactsForm(false));
  };

  return (
    <section
      onClick={(event) => handleClickCloseContact()}
      className="ContactsForm__center"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="ContactsFrom__container"
        id="ContactsFrom-container"
      >
        <div className="ContactsForm">
          <h2 className="ContactsForm__title">LET’S TALK?</h2>

          <div className="ContactsForm__switcher">
            <button
              onClick={() => setJoinTeam(false)}
              className={cn(
                "ContactsForm__switcher__button ContactsForm__switcher__button--left",
                { "ContactsForm__switcher__button--active": !joinTeam }
              )}
            ></button>

            <button
              onClick={() => setJoinTeam(true)}
              className={cn(
                "ContactsForm__switcher__button ContactsForm__switcher__button--right",
                { "ContactsForm__switcher__button--active": joinTeam }
              )}
            ></button>
          </div>

          <form ref={form} className="ContactsForm__form" action="POST">
            <div className="ContactsForm__form__section">
              <label className="ContactsForm__form__label" htmlFor="name">
                FIRST NAME & LAST NAME*
                <input
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  className={cn("ContactsForm__form__input", {
                    "ContactsForm__form__input--error": nameError,
                  })}
                  minLength={4}
                  maxLength={20}
                  type="text"
                  id="name"
                  placeholder="enter username"
                  required
                />
              </label>

              <label className="ContactsForm__form__label" htmlFor="email">
                e-mail
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  className={cn("ContactsForm__form__input", {
                    "ContactsForm__form__input--error": emailError,
                  })}
                  maxLength={20}
                  type="email"
                  id="email"
                  placeholder="enter your e-mail"
                  required
                />
              </label>

              {joinTeam && (
                <label className="ContactsForm__form__label" htmlFor="link">
                  link cv
                  <input
                    onChange={(event) => setCvlink(event.target.value)}
                    value={cvlink}
                    className={cn("ContactsForm__form__input", {
                      "ContactsForm__form__input--error": cvlinkError,
                    })}
                    maxLength={500}
                    type="text"
                    id="link"
                    placeholder="enter your e-mail"
                    required
                  />
                </label>
              )}
            </div>

            <div className="ContactsForm__form__section">
              <label className="ContactsForm__form__label" htmlFor="phone">
                phone
                <input
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                  className={cn("ContactsForm__form__input", {
                    "ContactsForm__form__input--error": phoneError,
                  })}
                  maxLength={20}
                  type="text"
                  id="phone"
                  placeholder="enter your phone"
                  required
                />
              </label>

              <label className="ContactsForm__form__label" htmlFor="comments">
                COMMENTS
                <textarea
                  onChange={(event) => setComment(event.target.value)}
                  value={comment}
                  className="ContactsForm__form__textarea"
                  name="comments"
                  maxLength={600}
                  id="comments"
                  placeholder="enter your comment (optional)"
                ></textarea>
              </label>
            </div>
          </form>

          <button
            onClick={() => handleSubmitForm(name, email, phone, comment)}
            className="ContactsForm__form__button"
            type="submit"
          >
            SEND REQUEST
          </button>
        </div>
      </div>
    </section>
  );
};
