import React from "react";

const Review = () => {
  return (
    <section>
      <h1 className="text-center text-4xl font-medium">Review Us!</h1>
      <div className="flex items-center justify-around">
        <div className="min-w-[25%]">
          <form>
            <label className="input input-bordered flex items-center gap-2 my-2">
              <input type="text" placeholder="Title....." className="grow" />
            </label>

            <textarea
              className="input input-bordered flex items-center gap-2 my-2 grow w-full"
              placeholder="Review....."
            ></textarea>
            <input
              type="submit"
              value="Review"
              className="btn btn-primary w-full btn-sm my-2"
              required
            />
          </form>
        </div>
        <div>
          <img src="home_review.png" width={500} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Review;
