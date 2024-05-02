import axios from 'axios';
import { useState } from 'react';

const AuthForm = () => {
  // Déclaration des états utilisés dans le formulaire
  const [islogin, setIsLogin] = useState(false);
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errormessage, setErrormessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Fonction pour formater le numéro de téléphone
  const formatPhoneNumber = (input) => {
    const digitsOnly = input.replace(/\D/g, '');
    let formattedValue = '';
  
    // Ajouter le préfixe "+237"
    if (digitsOnly.length >= 3) {
      formattedValue = `${digitsOnly.slice(0, 3)}`;
    }
  
    // Ajouter les deux premiers chiffres après le préfixe
    if (digitsOnly.length > 3) {
      formattedValue += ` ${digitsOnly.slice(3, 5)}`;
    }
  
    // Ajouter les deux chiffres suivants
    if (digitsOnly.length > 5) {
      formattedValue += ` ${digitsOnly.slice(5, 7)}`;
    }
  
    // Ajouter les deux derniers chiffres
    if (digitsOnly.length > 7) {
      formattedValue += ` ${digitsOnly.slice(7, 9)}`;
    }
  
    // Ajouter les deux derniers chiffres restants
    if (digitsOnly.length > 9) {
      formattedValue += ` ${digitsOnly.slice(9)}`;
    }
  
    return formattedValue;
  };

  // Gérer les changements des champs de saisie
  const handleInputChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setPhone(formattedValue);
    console.log(formattedValue);
  };

  // Gérer la soumission du formulaire
  const submitHandler = async (e) => {
    e.preventDefault();

    switch (islogin) {
      // Cas de connexion
      case true:
        try {

          // Quand user connect 
          setLoading(true);
          const user = {
            phone,
            password,
          };
          const { data } = await axios.post('/api/users/login', user);
          localStorage.setItem('user', JSON.stringify(data));//user de notre localStorage au niveau de notre App.jsx

          setLoading(false);
          // Quand user deconnect 
          window.location.reload();
          

        } catch (error) {
          setLoading(false);
          console.log(error);
        }
        break;

      // Cas d'inscription
      case false:

      if(password === confirmPassword){
        setLoading(true); 
        const newUser = { 
          phone,
          username,
          password
         };
         try {
           const { data } = await axios.post('/api/users/', newUser);
           localStorage.setItem('user', JSON.stringify(data));
           window.location.reload();
          setLoading(false);
          } catch (error) {
          setLoading(false); 
            console.log(error);
          }
        }else{
          setErrormessage('Mot de passe ne correspond pas !');
          setTimeout(() => {
          setErrormessage('');
          }, 5500);
        }
        break;

      default: 
        break;
    }
  };

  // Rendu du composant
  return (
    <div className='w-full'>
      {errormessage && ( 
        <div className="flex rounded-md justify-center items-center pt-5 w-full">
          <span  className='p-3 text-red-600 bg-red-50'> {errormessage}</span>
        </div>
      )}
      {loading && ( 
        <div className="flex rounded-md justify-center items-center pt-5 w-full">
          <span  className='p-4  text-green-600 bg-green-50'> Chargement...</span>
        </div>
      )}



      <form 
      onSubmit={submitHandler}
       className='w-full py-20 px-10 flex flex-col'>
        <input
          onChange={handleInputChange}
          type='text'
          placeholder='Numero de téléphone'
          className='w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]'
        />
        {!islogin && (
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder={`Nom d'utilisateur`}
            className='w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]'
          />
        )}

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder={`Mot de passe`}
          className='w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]'
        />
        {!islogin && (
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            placeholder={`Confirmation du mot de passe`}
            className='w-full text-[1.2rem] outline-none p-3 border-b-2 border-[#f0f2f5]'
          />
        )}

        {islogin ? (
          <span className='mt-4'>
            Pas encore de compte?{' '}
            <span
              className='text-[#00a884] cursor-pointer'
              onClick={() => setIsLogin(false)}
            >
              Creer un compte
            </span>
          </span>
        ) : (
          <span className='mt-4'>
            Avez-vous déjà un compte?{' '}
            <span
              className='text-[#00a884] cursor-pointer'
              onClick={() => setIsLogin(true)}
            >
              connexion
            </span>
          </span>
        )}

        <button 
        
        className='text-[1.2rem] mt-5 py-2 px-3 bg-[#00a884] text-white'>
          {islogin ? 'connexion' : 'Inscription'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;