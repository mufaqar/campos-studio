import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../public/images/logo.png';

export default function CustomForm({
  status,
  message,
  onValidated,
  state,
  hideFields,
}) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [country, setCountry] = useState('');

  const [emailExist, setEmailExist] = useState(false);
  const [firstNameExist, setFirstNameExist] = useState(false);
  const [countryExist, setCountryExist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    firstName === '' ? setFirstNameExist(true) : setFirstNameExist(false)
    email === '' ? setEmailExist(true) : setEmailExist(false)
    country === '' ? setCountryExist(true) : setCountryExist(false)
    
    
    if (!email || !firstName || !country) {
      
    } else {
      email &&
        firstName &&
        country &&
        email.indexOf('@') > -1 &&
        onValidated({
          EMAIL: email,
          MERGE1: firstName,
          COUNTRY1: country,
        });
      state(false);
      
    }
  };

  return (
    <form className="mt-1" onSubmit={(e) => handleSubmit(e)}>
      {status === 'sending' && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === 'error' && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div className="font-FoundersGroteskRegular flex items-center lg:text-[21px]">
          <p>Thank You</p>
          <figure className="mt-2 ml-2">
            <Image src={Logo} alt="hippo" width={40} height={20}></Image>
          </figure>
        </div>
      )}

      <div className={hideFields ? 'block' : 'hidden'}>
        <div className="flex items-center justify-between mt-1">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
            className="input_field w-[70%] bg-transparent placeholder:text-lg placeholder:md:text-xl font-FoundersGroteskRegular lg:text-[21px]"
            placeholder="Name"
            isRequired
          />
          <p
            className={firstNameExist ? 'block' : 'hidden'}
          >
            Required Field
          </p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            className="input_field w-[70%] bg-transparent placeholder:text-lg placeholder:md:text-xl font-FoundersGroteskRegular lg:text-[21px]"
            placeholder="Email"
            isRequired
          />
          <p
            className={emailExist ? 'block' : 'hidden'}
          >
            Required Field
          </p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <input
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            value={country}
            className="input_field w-[70%] bg-transparent placeholder:text-lg placeholder:md:text-xl font-FoundersGroteskRegular lg:text-[21px]"
            placeholder="Country"
            isRequired
          />
          <p
            className={countryExist ? 'block text-right' : 'hidden'}
          >
            Enter an email address
          </p>
        </div>
      </div>

      <input
        label="subscribe"
        type="submit"
        value="Enter"
        className={`text-lg cursor-pointer md:text-xl input_field ${
          hideFields ? 'block' : 'hidden'
        }`}
        formValues={[email, firstName, country]}
      />
    </form>
  );
}
