export default function Avatar({ src, alt, size}) {
  return (
    <>
    <div className={`flex items-center justify-center  bg-gray-950  w-[${size}px] h-[${size}px]`}>
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover border-[1.5px] w-[${size}px] h-[${size}px] border-x-brand-300`}
      />
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
