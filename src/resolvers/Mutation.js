const Mutations = {
  async createCampground(_, args, context, info) {
    const campground = await context.db.mutation.createCampground(
      {
        data: {
          ...args
        }
      },
      info
    );
    return campground;
  },
  async deleteCampground(_, args, context, info) {
    const campground = await context.db.mutation.deleteCampground(
      {
        where: {
          id: args.id
        }
      },
      info
    );
    return campground;
  },
};

module.exports = Mutations;