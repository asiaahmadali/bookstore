function About() {
  return (
    <div className="md:flex md:gap-[100px] md:items-center p-4">
      <img src="images/bg2.png" alt="" className="max-w-200px h-200px" />
      <div>
        <h1 className="font-medium text-2xl text-blue-600 m-3">
          {" "}
          A Room Without Books Is Like A Body Without Soul
        </h1>
        <p>
          Books hold a profound significance in our lives, serving as gateways
          to knowledge, imagination, and cultural enrichment.Through books, we
          explore new ideas, solve complex problems, and engage with the
          thoughts of brilliant minds across history. They provide a refuge for
          the mind, inviting readers into realms of fantasy, adventure, and
          personal growth.
        </p>
      </div>
    </div>
  );
}

export default About;
