export const Reply = ({ 
  userImagePath, 
  username, 
  replyText, 
  likeNum 
}) => {
  return (
  <div>
      <div>{this.props.userImagePath}</div>
      <div>{this.props.username}</div>
      <div>{this.props.replyText}</div>
      <div>{this.props.likeNum}</div>
  </div>
  );
};

/*if (likeNum >= 0){
display number of like(thumbs up and likes)
}else{
hide likeNum
};*/