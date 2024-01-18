using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Infrastructure.Internal;
using Model;

public class CardDbContext : DbContext
{
  public DbSet<Card> Cards { get; set; }

  public CardDbContext(DbContextOptions<CardDbContext> options) : base(options)
  {
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Card>().HasKey(c => c.Id);
  }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    optionsBuilder.UseSqlServer(optionsBuilder.Options.FindExtension<SqlServerOptionsExtension>().ConnectionString, options =>
    {
      options.EnableRetryOnFailure();
    });
  }
}
