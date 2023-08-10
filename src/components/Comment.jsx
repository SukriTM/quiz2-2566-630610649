import userImagePath from "@/libs/comments"

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <div>{this.props.userImagePath}</div>
      <div>{this.props.username}</div>
      <div>{this.props.commentText}</div>
      <div>{this.props.likeNum}</div>
      <div>{this.props.replies}</div>
    </div>
  );
};

/*if (likeNum >= 0){
display number of like(thumbs up and likes)
}else{
hide likeNum
};*/