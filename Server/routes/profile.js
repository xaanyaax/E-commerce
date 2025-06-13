// In auth.js or a new file
//🔐 Only logged-in users with a valid JWT token can access /profile.
import authMiddleware from "../middleware/authMiddleware.js";

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
