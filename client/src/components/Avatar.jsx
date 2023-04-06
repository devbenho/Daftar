export default function Avatar(props) {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        className={`border-[1.5px] border-x-brand-300 object-cover h-[${props.size}px] w-[${props.size}px] rounded-full`}
      />
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
