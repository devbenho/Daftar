export default function Avatar({size, src, alt}) {
  return (
    <>
        <img
          src={src}
          alt={alt}
          className={`object-cover w-32 h-32 rounded-full `}
          // className={`object-cover w-${size} h-${size} rounded-full `}
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
