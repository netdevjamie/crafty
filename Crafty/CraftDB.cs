namespace Crafty
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class CraftDB : DbContext
    {
        public CraftDB()
            : base("name=CraftDB")
        {
        }

        public virtual DbSet<Equipment> Equipments { get; set; }
        public virtual DbSet<Grain> Grains { get; set; }
        public virtual DbSet<Hop> Hops { get; set; }
        public virtual DbSet<Recipe> Recipes { get; set; }
        public virtual DbSet<RecipeType> RecipeTypes { get; set; }
        public virtual DbSet<Style> Styles { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<Water> Waters { get; set; }
        public virtual DbSet<Yeast> Yeasts { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Water>()
                .HasMany(e => e.Recipes)
                .WithOptional(e => e.Water)
                .HasForeignKey(e => e.WaterId);
        }
    }
}
