module IgdbTestHelper
  def igdb_games_response_body
    JSON.generate([
      {
        "id" => 1942,
        "name" => "The Witcher 3: Wild Hunt",
        "url" => "https://www.igdb.com/games/the-witcher-3-wild-hunt",
        "platforms" => [6, 48, 49],
        "cover" => {
          "cloudinary_id" => "tri1c6vbydeosoqajwt1"
        }
      },
      {
        "id" => 478,
        "name" => "The Witcher 2: Assassins of Kings",
        "url" => "https://www.igdb.com/games/the-witcher-2-assassins-of-kings",
        "platforms" => [6, 12, 3],
        "cover" => {
          "cloudinary_id" => "mcou7xzxq0qnerehesrh"
        }
      },
      {
        "id" => 80,
        "name" => "The Witcher",
        "url" => "https://www.igdb.com/games/the-witcher",
        "platforms" => [6, 0],
        "cover" => {
          "cloudinary_id" => "nrkdzmkevbbevdvm9bxh"
        }
      },
      {
        "id" => 1074,
        "name" => "Game without supported platform",
        "platforms" => [4, 41, 47, 5],
        "cover" => {
          "cloudinary_id" => "scutr4p9gytl4txb2soy"
        }
      },
      {
        "id" => 95001,
        "name" => "Game without platforms",
        "cover" => {
          "cloudinary_id" => "yrmbn0bixlihll7uetmu"
        }
      },
      {
        "id" => 1942,
        "name" => "Game without cover",
        "platforms" => [6, 48, 49]
      }
    ])
  end
end
