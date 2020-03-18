{
  authors
    ? authors.map(author => {
        return (
          <div
            className="col-md-4"
            key={author.id}
            onClick={() =>
              this.props.history.push(`/contributors/${author.id}`)
            }
          >
            <ProfileCard
              // className="col-md-4"
              // onClick={() =>
              //   this.props.history.push(
              //     `/contributor/${author.id}`
              //   )
              // }
              commPerson={commPerson}
              name={author.name}
              country={author.location}
            />
          </div>
        );
      })
    : null;
}

{
  author ? (
    <div className="contributor-profile__card">
      <img
        src={commPerson} //todo use real image when added
        alt="contributor"
        className="contributor-profile__card-img"
      />
      <p className="contributor-profile__card-title">
        {author.name}
        <span>
          <BadgeGrey className="ml-3 contributor-profile__card-img1" />
        </span>
      </p>
      <p className="contributor-profile__card-subtitle pt-2">
        {author.location}
      </p>
    </div>
  ) : null;
}


<h5 className="heading heading__tertiary">
                Earn a badge <span className="ml-3">COMPLETE PROFILE</span>
              </h5>



              {author ? (
                <div className="contributor-profile__card">
                  <img
                    src={commPerson} //todo use real image when added
                    alt="contributor"
                    className="contributor-profile__card-img"
                  />
                  <p className="contributor-profile__card-title">
                    {author.name}
                    <span>
                      <BadgeGrey className="ml-3 contributor-profile__card-img1" />
                    </span>
                  </p>
                  <p className="contributor-profile__card-subtitle pt-2">
                    {author.location}
                  </p>
                </div>
              ) : null}

              <h5 className="heading heading__tertiary">
                Earn a badge <span className="ml-3">COMPLETE PROFILE</span>
              </h5>

              <div className="contributor-profile__links py-5">
                {author ? (
                  <>
                    <Link
                      to={`/profile/${author.name}`}
                      className="contributor-profile__mr"
                    >
                      Articles
                    </Link>
                    <span className="contributor-profile__mr">●</span>
                    <Link className="contributor-profile__mr">Live</Link>
                    <span className="contributor-profile__mr">●</span>
                    <Link className="">Series</Link>
                  </>
                ) : null}
              </div>
              <Link className="text-danger">Log out</Link>
              <hr />