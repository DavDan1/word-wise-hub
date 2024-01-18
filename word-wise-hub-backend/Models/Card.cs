using System.ComponentModel.DataAnnotations;
namespace Model;


public class Card
{
  [Key]
  public int Id { get; set; }
  public string Question { get; set; }
  public string Answer { get; set; }
  public string Category { get; set; }
}
