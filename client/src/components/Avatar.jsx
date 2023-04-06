export default function Avatar(props) {
  return (
    <>
      <div
        className={`object-cover w-[${props.size}px] h-[${props.size}px] rounded-full`}
      >
        <img src={props.src} alt={props.alt} />
      </div>
    </>
  );
}

{
  /*

.avatar {
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

 */
}
