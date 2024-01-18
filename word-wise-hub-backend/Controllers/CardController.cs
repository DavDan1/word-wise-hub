using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

namespace YourNamespace
{
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
      try
      {
        var cards = await _context.Cards.ToListAsync();
        return Ok(cards);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal Server Error: {ex.Message}");
      }
    }

    [HttpPost]
    public async Task<ActionResult<Card>> CreateCard(Card card)
    {
      try
      {
        _context.Cards.Add(card);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAllCards), new { }, card);
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal Server Error: {ex.Message}");
      }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCard(int id, UpdateCardDto updateCardDto)
    {
      var existingCard = await _context.Cards.FindAsync(id);

      if (existingCard == null)
      {
        return NotFound();
      }
      existingCard.Question = updateCardDto.Question ?? existingCard.Question;
      existingCard.Answer = updateCardDto.Answer ?? existingCard.Answer;
      existingCard.Category = updateCardDto.Category ?? existingCard.Category;

      _context.Entry(existingCard).State = EntityState.Modified;

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
      try
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
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal Server Error: {ex.Message}");
      }
    }
  }
}
