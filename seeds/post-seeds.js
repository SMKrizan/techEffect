const { Post } = require('../models');

const postData = [
    {
        title: "Distributed Enterprise Software via Container Platforms and Serverless Computing",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Arcu felis bibendum ut tristique et egestas quis. Viverra nibh cras pulvinar mattis nunc. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eget gravida cum sociis natoque penatibus. Est placerat in egestas erat imperdiet. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. In hac habitasse platea dictumst vestibulum rhoncus est.",
        user_id: 4
    },
    {
        title: "Edge Computing Architectures and The Future of Office",
        content: "Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Netus et malesuada fames ac. In vitae turpis massa sed elementum tempus egestas sed sed. Nulla posuere sollicitudin aliquam ultrices. Neque vitae tempus quam pellentesque. Ornare suspendisse sed nisi lacus sed viverra. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Mollis aliquam ut porttitor leo a. Aliquam vestibulum morbi blandit cursus risus. Urna duis convallis convallis tellus id. Nullam non nisi est sit amet facilisis magna etiam. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Amet tellus cras adipiscing enim. Aliquam nulla facilisi cras fermentum odio. Elementum tempus egestas sed sed risus. Magna eget est lorem ipsum dolor. Ac turpis egestas sed tempus urna et.",
        user_id: 5
    },
    {
        title: "The Disruptor Tech That Will Characterize Computing of the 2020s",
        content: "Sit amet dictum sit amet justo donec. Platea dictumst quisque sagittis purus sit amet. Urna id volutpat lacus laoreet non curabitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Odio ut enim blandit volutpat maecenas volutpat. Sit amet porttitor eget dolor morbi non arcu risus. Habitasse platea dictumst quisque sagittis purus. Proin sagittis nisl rhoncus mattis. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Nunc congue nisi vitae suscipit tellus mauris a.",
        user_id: 1
    },
    {
        title: "Adaptation in a New Technological Age of Sustainability Means Mitigating Climate Risks",
        content: "Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Condimentum mattis pellentesque id nibh tortor id. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. In vitae turpis massa sed elementum tempus egestas sed. Nullam eget felis eget nunc. Pharetra pharetra massa massa ultricies mi quis. Ipsum a arcu cursus vitae congue mauris. Est velit egestas dui id ornare arcu. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Fusce ut placerat orci nulla pellentesque dignissim enim. Commodo quis imperdiet massa tincidunt nunc pulvinar. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Netus et malesuada fames ac turpis egestas sed tempus urna. Donec et odio pellentesque diam volutpat commodo sed. Pellentesque nec nam aliquam sem et tortor consequat. Non odio euismod lacinia at quis risus sed vulputate odio. Suspendisse ultrices gravida dictum fusce.",
        user_id: 5
    },
    {
        title: "Commercial Real Estate Faces a Crisis as Companies Go Home and Are Not Looking Back",
        content: "Interdum consectetur libero id faucibus. Quam viverra orci sagittis eu volutpat odio facilisis. Ullamcorper sit amet risus nullam eget felis. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Hac habitasse platea dictumst quisque sagittis purus sit amet. Eu sem integer vitae justo eget magna fermentum iaculis. Orci dapibus ultrices in iaculis nunc sed augue. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Curabitur gravida arcu ac tortor dignissim. Vitae sapien pellentesque habitant.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts