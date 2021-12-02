import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
    dispatch(changeLanguage("en"));
    setCurrency("USD");
  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          English
        </span>
      </div>
      <div className="same-language-currency use-style">
        <span>
          USD 
        </span>
        
      </div>
      <div className="same-language-currency">
        <p>Call Us 3965410</p>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
