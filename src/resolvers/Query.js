// Public facing Queries

// If the Query looks the same on the Prisma end you can forward the query from Yoga to Prisma.
const {forwardTo}  = require('prisma-binding')

const Query = {
    campgrounds: forwardTo('db'),
    users: forwardTo('db'),

    // custom Queries
    async campground(_, args, context, info) {
        const campground = await context.db.query.campground({
            where: {
                id: args.id,
            }
        });
        return campground;
    },
    async user(_, args, context, info) {
        const user = await context.db.query.user({
            where: {
                id: args.id,
            }
        });
        return user;
    },
};

module.exports = Query;
