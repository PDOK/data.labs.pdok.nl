import unittest
from .ProgressBar import ProgressBar


class TestProgressBar(unittest.TestCase):
    def test_Progressbar(self):
        progress_bar = ProgressBar()
        self.assertEqual(progress_bar.bar_length, 10)
