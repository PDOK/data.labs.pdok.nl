import sys

"""
Adapted from http://stackoverflow.com/questions/3160699/python-progress-bar
This module provides a simple console progress bar indicator
"""


class ProgressBar:
    @staticmethod
    # TODO: refactor to allow creation of a singleton progress_bar that has a default bar length
    def update_progress(progress, bar_length=10):
        """
        update_progress() : Displays or updates a console progress bar

        The method simply repeats  on the console each time the method is called
        :param bar_length: Modify this to change the length of the progress bar
        :param progress: Accepts a float between 0 and 1. Any int will be converted to a float.
        A value under 0 represents a 'halt'.
        A value at 1 or bigger represents 100%
        :return: 
        """
        status = ""
        if isinstance(progress, int):
            progress = float(progress)
        if not isinstance(progress, float):
            progress = 0
            status = "error: progress var must be float\r\n"
        if progress < 0:
            progress = 0
            status = "Halt...\r\n"
        if progress >= 1:
            progress = 1
            status = "Done...\r\n"
        block = int(round(bar_length*progress))
        progress_rounded = "{:10.2f}".format(float(progress*100))
        text = "\rPercent: [{0}] {1}% {2}".format("#"*block + "-"*(bar_length-block), progress_rounded, status)
        sys.stdout.write(text)
        sys.stdout.flush()
