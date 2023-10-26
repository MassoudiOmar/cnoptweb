import React,{useState} from 'react'
import '../assets/styles/Profile.css'
import NavigationBtns from '../components/navigationBtns';

export default function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className='Documents-container'>
      <div className='inner-navbar'>
        <NavigationBtns/>

      </div>
      <div className='Profile-body'>

        <div className='Profile-title-section'> <span className='Profile-title'>Profile</span><span className='line'></span> </div>

        <div className='Profile-section'>
        <div className='profile-pic'>
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                style={{
                  height: '13rem',
                  width: '13rem',
                  borderRadius: '1rem',
                  border: '10px solid white',
                  objectFit: 'cover',
                }}
                className='shadowed-image'
                alt='Profile'
              />
            ) : (
              <img
                src={'https://www.svgrepo.com//show/5125/avatar.svg'}
                style={{
                  height: '13rem',
                  width: '13rem',
                  borderRadius: '1rem',
                  border: '10px solid white',
                  objectFit: 'cover',
                }}
                className='shadowed-image'
                alt='Profile'
              />
            )}
            <input
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id='fileInput'
            />
            <label
              htmlFor='fileInput'
              style={{ color: 'black', fontWeight: 600, cursor: 'pointer' }}
            >
              Changer la photo
            </label>
          </div>
          <div className='profile-info'>
            <div className='input-holder'><span className='profile-text'>Changer le Nom</span>        <input placeholder='Nom' className='profile-input' /></div>
            <div className='input-holder'><span className='profile-text'>Changer Mot de passe</span>  <input placeholder='Mot de passe' className='profile-input' /></div>
            <div className='input-holder'><span className='profile-text'>Confirmer Mot de passe</span><input placeholder='Mot de passe' className='profile-input' /></div>
            <div className='button-holder'>Enregistrer</div>
          </div>
        </div>

      </div>
    </div>
  )
}
