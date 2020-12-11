const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Good all-encompassing article on Container Platforms by Jim Armstrong, 'Developers are hired for their creative ability to solve problems with code so adopting a platform that requires your teams to abandon their intuition and prior knowledge in favor of tools that only work with one prescriptive methodology not only slows down innovation, it also increases the risk of developers going outside the IT-approved processes to get the job done.' https://www.docker.com/blog/whats-in-a-container-platform/",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "From power systems to computer networks to work and schooling... the over-arching trend seems to be pointing toward distributed systems.",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Successful companies embrace the disruption! https://www.bcg.com/publications/2017/value-creation-strategy-transformation-creating-value-disruption-others-disappear.",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "'Nearly 14 percent of office space in Midtown Manhattan is vacant, the highest rate since 2009.' https://www.nytimes.com/2020/12/11/nyregion/nyc-commercial-real-estate.html",
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: "True enough. Here's an article we published in 2009: https://www.wsj.com/articles/SB123802456807742287",
        user_id: 2,
        post_id: 5
    },
    {
        comment_text: "Green Information and Communications Technology (ICT) is a thing. ",
        user_id: 4,
        post_id: 4
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments