using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Model;

[ApiController]
[Route("api/cards")]
public class CardController : ControllerBase
{
  private readonly CardDbContext _context;

  public CardController(CardDbContext context)
  {
    _context = context;
  }

  [HttpGet]
  public async Task<ActionResult<IEnumerable<Card>>> GetAllCards()
  {
    return await _context.Cards.ToListAsync();
  }
  [HttpPost]
  public async Task<ActionResult<Card>> CreateCard(Card card)
  {
    _context.Cards.Add(card);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(GetAllCards), new { }, card);
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateCard(int id, Card card)
  {
    if (id != card.Id)
    {
      return BadRequest();
    }

    _context.Entry(card).State = EntityState.Modified;

    try
    {
      await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
      if (!_context.Cards.Any(c => c.Id == id))
      {
        return NotFound();
      }
      throw;
    }

    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteCard(int id)
  {
    var card = await _context.Cards.FindAsync(id);

    if (card == null)
    {
      return NotFound();
    }

    _context.Cards.Remove(card);
    await _context.SaveChangesAsync();

    return NoContent();
  }
}
