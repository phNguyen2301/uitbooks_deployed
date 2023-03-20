import './FavoritesPostContent.scss';
function FavoritesPostContent() {
  return (
    <div className='favorite-post' style={{ textAlign: 'center' }}>
      <div>
        <img
          className='empty-wrapper-post'
          src='https://drive.google.com/uc?id=1uyd61DglezvYQWuyUYyCFdv3hCgWaRsB'
          alt='no item favorites'
        />
        <p>
          <b>Thông cảm cho tụi mình tính năng này đang phát triển nha 🥺</b>
        </p>
      </div>
    </div>
  );
}

export default FavoritesPostContent;
