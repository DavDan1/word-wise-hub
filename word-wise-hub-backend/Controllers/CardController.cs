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
}
