import React from 'react';
import './Posts.css';
function Posts() {
  return (
    <div className="how-it-works-container">
      <h1>How the "Find a Hostel" Website Works</h1>

      <div className="steps">
        {/* Step 1 */}
        <div className="step">
          <div className="step-content">
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="Sign Up"
              className="step-image left"
            />
            <div className="step-text right">
              <h2>1. Sign Up and Create an Account</h2>
              <p>
                Before you can start browsing available listings, you'll need to
                create an account. Click on "Sign Up" in the top-right corner of the
                homepage, fill in your details, verify your email address, and
                you're ready to start exploring!
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="step-content">
            <div className="step-text left">
              <h2>2. Explore Available Listings</h2>
              <p>
                Use the search bar on the homepage to enter your preferred location.
                Filter your search by property type, price range, and amenities to
                find exactly what you're looking for. Browse the listings to see
                detailed information, including photos, descriptions, and reviews
                from previous tenants.
              </p>
            </div>
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="Explore Listings"
              className="step-image right"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-content">
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="View Details"
              className="step-image left"
            />
            <div className="step-text right">
              <h2>3. View Property Details</h2>
              <p>
                Once you find a listing that interests you, click on the listing to
                view more detailed information. Check the availability calendar to
                see when the property is available for rent. Read the host's
                description and the property's amenities to ensure it meets your
                needs.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step">
          <div className="step-content">
            <div className="step-text left">
              <h2>4. Contact the Host</h2>
              <p>
                If you have questions or want to learn more about the property, use
                the contact form on the listing page to send a message directly to
                the host. Discuss availability, pricing, and any other details you
                need before making a decision.
              </p>
            </div>
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="Contact Host"
              className="step-image right"
            />
          </div>
        </div>

        {/* Step 5 */}
        <div className="step">
          <div className="step-content">
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="Book Your Space"
              className="step-image left"
            />
            <div className="step-text right">
              <h2>5. Book Your Space</h2>
              <p>
                Once you've found the perfect spot, click the "Book Now" button on
                the listing page, select your move-in and move-out dates, review the
                terms and conditions, and make a secure payment to confirm your
                booking.
              </p>
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="step">
          <div className="step-content">
            <div className="step-text left">
              <h2>6. Move In and Enjoy Your Stay</h2>
              <p>
                After booking, you'll receive a confirmation email with all the
                details you need. On the move-in day, meet your host at the
                agreed-upon time to receive the keys, settle into your new space,
                and enjoy your stay!
              </p>
            </div>
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="Move In"
              className="step-image right"
            />
          </div>
        </div>

        {/* Step 7 */}
        <div className="step">
          <div className="step-content">
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="Leave a Review"
              className="step-image left"
            />
            <div className="step-text right">
              <h2>7. Leave a Review</h2>
              <p>
                After your stay, don't forget to share your experience by rating
                your stay on our platform and leaving a detailed review to provide
                feedback to the host and the community.
              </p>
            </div>
          </div>
        </div>

        {/* Step 8 */}
        <div className="step">
          <div className="step-content">
            <div className="step-text left">
              <h2>8. List Your Own Space</h2>
              <p>
                If you have a room or apartment you'd like to rent out, click on
                "List Your Space" at the top of the page, create a listing by
                providing details about the space, uploading photos, and setting
                your price. Verify your location by following the instructions
                during the sign-up process, and start accepting bookings!
              </p>
            </div>
            <img
              src="https://picsum.photos/500/500/?blur"
              alt="List Your Space"
              className="step-image right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
