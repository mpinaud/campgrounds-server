// Public facing Queries

const Query = {
    async campground(_, args, context, info) {
        const campground = await context.db.query.campground({
            where: {
                id: args.id,
            }
        });
        return campground;
    },
    async campgrounds(_, args, context, info) {
        const campgrounds = await context.db.query.campgrounds();
        return campgrounds;
    },
    async users(_, args, context, info) {
        const users = await context.db.query.users();
        return users;
    },
};

module.exports = Query;
