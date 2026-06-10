
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
A
c
t
i
v
i
t
y
,


 
 
G
i
t
B
r
a
n
c
h
,


 
 
P
a
u
s
e
,


 
 
P
l
a
y
,


 
 
R
o
t
a
t
e
C
c
w
,


 
 
S
e
n
d
,


 
 
S
h
i
e
l
d
A
l
e
r
t
,


}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
 
}
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
O
K
 
=
 
"
#
2
2
c
5
5
e
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




c
o
n
s
t
 
s
e
c
t
i
o
n
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


c
o
n
s
t
 
s
e
c
t
i
o
n
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
W
r
i
t
e
 
f
a
n
-
o
u
t
 
a
n
i
m
a
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
R
e
p
l
i
c
a
S
t
a
t
e
 
=
 
"
i
d
l
e
"
 
|
 
"
a
p
p
l
y
i
n
g
"
 
|
 
"
s
y
n
c
e
d
"
;




i
n
t
e
r
f
a
c
e
 
R
e
p
l
i
c
a
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
s
t
a
t
e
:
 
R
e
p
l
i
c
a
S
t
a
t
e
;


 
 
p
r
o
g
r
e
s
s
:
 
n
u
m
b
e
r
;


 
 
l
a
g
M
s
:
 
n
u
m
b
e
r
;


}




c
o
n
s
t
 
I
N
I
T
I
A
L
_
R
E
P
L
I
C
A
S
:
 
R
e
p
l
i
c
a
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
r
1
"
,
 
l
a
b
e
l
:
 
"
R
e
p
l
i
c
a
 
1
"
,
 
s
t
a
t
e
:
 
"
i
d
l
e
"
,
 
p
r
o
g
r
e
s
s
:
 
0
,
 
l
a
g
M
s
:
 
0
 
}
,


 
 
{
 
i
d
:
 
"
r
2
"
,
 
l
a
b
e
l
:
 
"
R
e
p
l
i
c
a
 
2
"
,
 
s
t
a
t
e
:
 
"
i
d
l
e
"
,
 
p
r
o
g
r
e
s
s
:
 
0
,
 
l
a
g
M
s
:
 
0
 
}
,


 
 
{
 
i
d
:
 
"
r
3
"
,
 
l
a
b
e
l
:
 
"
R
e
p
l
i
c
a
 
3
"
,
 
s
t
a
t
e
:
 
"
i
d
l
e
"
,
 
p
r
o
g
r
e
s
s
:
 
0
,
 
l
a
g
M
s
:
 
0
 
}
,


]
;




f
u
n
c
t
i
o
n
 
W
r
i
t
e
F
a
n
o
u
t
(
)
 
{


 
 
c
o
n
s
t
 
[
r
e
p
l
i
c
a
s
,
 
s
e
t
R
e
p
l
i
c
a
s
]
 
=
 
u
s
e
S
t
a
t
e
<
R
e
p
l
i
c
a
[
]
>
(
I
N
I
T
I
A
L
_
R
E
P
L
I
C
A
S
)
;


 
 
c
o
n
s
t
 
[
w
r
i
t
i
n
g
,
 
s
e
t
W
r
i
t
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
w
r
i
t
e
C
o
u
n
t
,
 
s
e
t
W
r
i
t
e
C
o
u
n
t
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;




 
 
c
o
n
s
t
 
t
r
i
g
g
e
r
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
w
r
i
t
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
W
r
i
t
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
W
r
i
t
e
C
o
u
n
t
(
(
c
)
 
=
>
 
c
 
+
 
1
)
;


 
 
 
 
/
/
 
E
a
c
h
 
r
e
p
l
i
c
a
 
g
e
t
s
 
a
 
d
i
f
f
e
r
e
n
t
 
l
a
g
 
p
r
o
f
i
l
e
 
t
o
 
f
e
e
l
 
r
e
a
l


 
 
 
 
c
o
n
s
t
 
l
a
g
P
r
o
f
i
l
e
s
 
=
 
[
4
0
0
,
 
8
0
0
,
 
1
6
0
0
]
;


 
 
 
 
s
e
t
R
e
p
l
i
c
a
s
(
(
r
s
)
 
=
>


 
 
 
 
 
 
r
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(
{
 
.
.
.
r
,
 
s
t
a
t
e
:
 
"
a
p
p
l
y
i
n
g
"
,
 
p
r
o
g
r
e
s
s
:
 
0
,
 
l
a
g
M
s
:
 
l
a
g
P
r
o
f
i
l
e
s
[
i
]
 
}
)
)
,


 
 
 
 
)
;


 
 
}
;




 
 
/
/
 
t
i
c
k
 
r
e
p
l
i
c
a
 
p
r
o
g
r
e
s
s
 
u
n
t
i
l
 
e
a
c
h
 
i
s
 
s
y
n
c
e
d


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
w
r
i
t
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
l
e
t
 
f
r
a
m
e
 
=
 
0
;


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
f
r
a
m
e
 
+
=
 
6
0
;


 
 
 
 
 
 
s
e
t
R
e
p
l
i
c
a
s
(
(
r
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
l
e
t
 
s
t
i
l
l
A
p
p
l
y
i
n
g
 
=
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
r
s
.
m
a
p
(
(
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
r
.
s
t
a
t
e
 
!
=
=
 
"
a
p
p
l
y
i
n
g
"
)
 
r
e
t
u
r
n
 
r
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
c
t
 
=
 
M
a
t
h
.
m
i
n
(
1
0
0
,
 
M
a
t
h
.
r
o
u
n
d
(
(
f
r
a
m
e
 
/
 
r
.
l
a
g
M
s
)
 
*
 
1
0
0
)
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
c
t
 
>
=
 
1
0
0
)
 
r
e
t
u
r
n
 
{
 
.
.
.
r
,
 
s
t
a
t
e
:
 
"
s
y
n
c
e
d
"
 
a
s
 
R
e
p
l
i
c
a
S
t
a
t
e
,
 
p
r
o
g
r
e
s
s
:
 
1
0
0
 
}
;


 
 
 
 
 
 
 
 
 
 
s
t
i
l
l
A
p
p
l
y
i
n
g
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
r
,
 
p
r
o
g
r
e
s
s
:
 
p
c
t
 
}
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
i
f
 
(
!
s
t
i
l
l
A
p
p
l
y
i
n
g
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
W
r
i
t
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
6
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
h
a
n
d
l
e
)
;


 
 
}
,
 
[
w
r
i
t
i
n
g
]
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
R
e
p
l
i
c
a
s
(
I
N
I
T
I
A
L
_
R
E
P
L
I
C
A
S
)
;


 
 
 
 
s
e
t
W
r
i
t
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
W
r
i
t
e
C
o
u
n
t
(
0
)
;


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
O
n
e
 
w
r
i
t
e
,
 
m
a
n
y
 
c
o
p
i
e
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
c
l
i
e
n
t
 
s
e
n
d
s
 
a
 
w
r
i
t
e
 
t
o
 
t
h
e
 
<
b
>
p
r
i
m
a
r
y
<
/
b
>
.
 
T
h
e
 
p
r
i
m
a
r
y
 
a
c
k
s
 
i
m
m
e
d
i
a
t
e
l
y
 
(
s
y
n
c
h
r
o
n
o
u
s


 
 
 
 
 
 
 
 
r
e
p
l
i
c
a
t
i
o
n
 
i
s
 
r
a
r
e
r
 
i
n
 
p
r
a
c
t
i
c
e
)
,
 
t
h
e
n
 
s
t
r
e
a
m
s
 
t
h
e
 
c
h
a
n
g
e
 
t
o
 
e
a
c
h
 
r
e
p
l
i
c
a
.
 
E
a
c
h
 
r
e
p
l
i
c
a


 
 
 
 
 
 
 
 
a
p
p
l
i
e
s
 
i
t
 
a
t
 
i
t
s
 
o
w
n
 
p
a
c
e
.
 
T
h
a
t
 
g
a
p
 
i
s
 
<
b
>
r
e
p
l
i
c
a
 
l
a
g
<
/
b
>
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
 
 
m
i
n
H
e
i
g
h
t
:
 
3
8
0
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
2
0
 
3
2
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
7
6
0
,
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
r
e
p
-
a
r
r
o
w
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
6
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
0
 
0
 
L
 
1
0
 
5
 
L
 
0
 
1
0
 
z
"
 
f
i
l
l
=
"
#
9
4
a
3
b
8
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
c
l
i
e
n
t
 
-
>
 
p
r
i
m
a
r
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
8
0
"
 
y
1
=
"
1
6
0
"
 
x
2
=
"
2
8
0
"
 
y
2
=
"
1
6
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
r
e
p
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
p
r
i
m
a
r
y
 
-
>
 
r
e
p
l
i
c
a
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
8
0
"
 
y
1
=
"
1
6
0
"
 
x
2
=
"
5
6
0
"
 
y
2
=
"
6
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
r
e
p
-
a
r
r
o
w
)
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
8
0
"
 
y
1
=
"
1
6
0
"
 
x
2
=
"
5
6
0
"
 
y
2
=
"
1
6
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
r
e
p
-
a
r
r
o
w
)
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
8
0
"
 
y
1
=
"
1
6
0
"
 
x
2
=
"
5
6
0
"
 
y
2
=
"
2
6
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
r
e
p
-
a
r
r
o
w
)
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
n
i
m
a
t
e
d
 
w
r
i
t
e
 
p
a
c
k
e
t
 
c
l
i
e
n
t
 
-
>
 
p
r
i
m
a
r
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
{
w
r
i
t
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
p
k
t
-
c
-
$
{
w
r
i
t
e
C
o
u
n
t
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
"
6
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
c
x
:
 
8
0
,
 
c
y
:
 
1
6
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
c
x
:
 
2
8
0
,
 
c
y
:
 
1
6
0
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
n
i
m
a
t
e
d
 
r
e
p
l
i
c
a
t
i
o
n
 
p
a
c
k
e
t
s
 
p
r
i
m
a
r
y
 
-
>
 
e
a
c
h
 
r
e
p
l
i
c
a
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
r
e
p
l
i
c
a
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
Y
 
=
 
[
6
0
,
 
1
6
0
,
 
2
6
0
]
[
i
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
p
p
l
y
i
n
g
 
=
 
r
.
s
t
a
t
e
 
=
=
=
 
"
a
p
p
l
y
i
n
g
"
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
k
e
y
=
{
r
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
p
p
l
y
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
p
k
t
-
$
{
r
.
i
d
}
-
$
{
w
r
i
t
e
C
o
u
n
t
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
"
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
c
x
:
 
3
8
0
,
 
c
y
:
 
1
6
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
c
x
:
 
5
6
0
,
 
c
y
:
 
t
a
r
g
e
t
Y
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
u
r
a
t
i
o
n
:
 
r
.
l
a
g
M
s
 
/
 
1
0
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
a
y
:
 
0
.
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
l
i
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
2
0
}
 
y
=
{
1
3
0
}
 
w
=
{
1
2
0
}
 
l
a
b
e
l
=
"
C
l
i
e
n
t
"
 
s
u
b
=
{
w
r
i
t
i
n
g
 
?
 
"
w
r
i
t
i
n
g
…
"
 
:
 
"
i
d
l
e
"
}
 
c
o
l
o
r
=
{
w
r
i
t
i
n
g
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
i
m
a
r
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x


 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
2
8
0
}


 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
1
3
0
}


 
 
 
 
 
 
 
 
 
 
 
 
w
=
{
1
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
P
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
=
"
l
e
a
d
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
p
u
l
s
e
=
{
w
r
i
t
i
n
g
}


 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
p
l
i
c
a
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
r
e
p
l
i
c
a
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
[
3
0
,
 
1
3
0
,
 
2
3
0
]
[
i
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
r
.
s
t
a
t
e
 
=
=
=
 
"
s
y
n
c
e
d
"
 
?
 
O
K
 
:
 
r
.
s
t
a
t
e
 
=
=
=
 
"
a
p
p
l
y
i
n
g
"
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
p
l
i
c
a
N
o
d
e
 
k
e
y
=
{
r
.
i
d
}
 
x
=
{
5
6
0
}
 
y
=
{
y
}
 
r
e
p
l
i
c
a
=
{
r
}
 
c
o
l
o
r
=
{
c
o
l
o
r
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
r
o
l
s
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
t
-
4
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
t
r
i
g
g
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
w
r
i
t
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
i
n
l
i
n
e
-
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
w
r
i
t
i
n
g
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
w
r
i
t
i
n
g
 
?
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
3
)
"
 
:
 
S
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
w
r
i
t
i
n
g
 
?
 
"
t
r
a
n
s
p
a
r
e
n
t
"
 
:
 
`
$
{
S
D
}
1
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
w
r
i
t
i
n
g
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
d
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
w
r
i
t
i
n
g
 
?
 
"
i
n
 
f
l
i
g
h
t
…
"
 
:
 
"
s
e
n
d
 
w
r
i
t
e
"
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
r
e
s
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
i
n
l
i
n
e
-
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
a
l
i
g
n
S
e
l
f
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
w
r
i
t
e
s
 
s
e
n
t
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>
{
w
r
i
t
e
C
o
u
n
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
t
a
k
e
a
w
a
y
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
A
K
E
A
W
A
Y


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
p
r
i
m
a
r
y
 
r
e
t
u
r
n
e
d
 
t
o
 
t
h
e
 
c
l
i
e
n
t
 
a
l
m
o
s
t
 
i
m
m
e
d
i
a
t
e
l
y
.
 
R
e
p
l
i
c
a
 
1
 
c
a
u
g
h
t
 
u
p
 
i
n
 
0
.
4
s
,


 
 
 
 
 
 
 
 
 
 
R
e
p
l
i
c
a
 
2
 
i
n
 
0
.
8
s
,
 
R
e
p
l
i
c
a
 
3
 
i
n
 
1
.
6
s
.
 
A
 
r
e
a
d
 
a
g
a
i
n
s
t
 
R
e
p
l
i
c
a
 
3
 
i
n
 
t
h
a
t
 
w
i
n
d
o
w
 
w
o
u
l
d


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
t
h
e
 
<
i
>
o
l
d
<
/
i
>
 
v
a
l
u
e
.
 
T
h
a
t
 
w
i
n
d
o
w
 
i
s
 
y
o
u
r
 
r
e
p
l
i
c
a
 
l
a
g
,
 
a
n
d
 
i
t
&
r
s
q
u
o
;
s
 
t
h
e
 
e
n
t
i
r
e


 
 
 
 
 
 
 
 
 
 
s
o
u
r
c
e
 
o
f
 
r
e
a
d
-
y
o
u
r
-
o
w
n
-
w
r
i
t
e
s
 
b
u
g
s
.


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
N
o
d
e
B
o
x
(
{


 
 
x
,


 
 
y
,


 
 
w
,


 
 
l
a
b
e
l
,


 
 
s
u
b
,


 
 
c
o
l
o
r
,


 
 
p
u
l
s
e
,


}
:
 
{


 
 
x
:
 
n
u
m
b
e
r
;


 
 
y
:
 
n
u
m
b
e
r
;


 
 
w
:
 
n
u
m
b
e
r
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
s
u
b
:
 
s
t
r
i
n
g
;


 
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;


 
 
p
u
l
s
e
?
:
 
b
o
o
l
e
a
n
;


}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
p
u
l
s
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
r
e
c
t


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
6
0
}


 
 
 
 
 
 
 
 
 
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
.
3
5
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
1
.
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
w
}
 
h
e
i
g
h
t
=
{
6
0
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
2
6
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
4
6
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
9
4
a
3
b
8
"
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
<
/
g
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
R
e
p
l
i
c
a
N
o
d
e
(
{
 
x
,
 
y
,
 
r
e
p
l
i
c
a
,
 
c
o
l
o
r
 
}
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
r
e
p
l
i
c
a
:
 
R
e
p
l
i
c
a
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
1
3
0
}
 
h
e
i
g
h
t
=
{
6
0
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
6
5
}
 
y
=
{
2
2
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
r
e
p
l
i
c
a
.
l
a
b
e
l
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
{
r
e
p
l
i
c
a
.
s
t
a
t
e
 
=
=
=
 
"
a
p
p
l
y
i
n
g
"
 
&
&
 
(


 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
1
2
}
 
y
=
{
3
6
}
 
w
i
d
t
h
=
{
1
0
6
}
 
h
e
i
g
h
t
=
{
6
}
 
r
x
=
{
3
}
 
f
i
l
l
=
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
1
2
}


 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
3
6
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
w
i
d
t
h
:
 
(
1
0
6
 
*
 
r
e
p
l
i
c
a
.
p
r
o
g
r
e
s
s
)
 
/
 
1
0
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
0
6
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
6
5
}
 
y
=
{
5
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
"
9
"
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
a
p
p
l
y
i
n
g
…
 
{
r
e
p
l
i
c
a
.
p
r
o
g
r
e
s
s
}
%


 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
r
e
p
l
i
c
a
.
s
t
a
t
e
 
=
=
=
 
"
s
y
n
c
e
d
"
 
&
&
 
(


 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
6
5
}
 
y
=
{
4
8
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
✓
 
s
y
n
c
e
d


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
r
e
p
l
i
c
a
.
s
t
a
t
e
 
=
=
=
 
"
i
d
l
e
"
 
&
&
 
(


 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
6
5
}
 
y
=
{
4
8
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
w
a
i
t
i
n
g


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
g
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
R
e
p
l
i
c
a
 
l
a
g
 
&
 
r
e
a
d
 
p
a
t
h
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
R
e
a
d
M
o
d
e
 
=
 
"
p
r
i
m
a
r
y
"
 
|
 
"
r
e
p
l
i
c
a
"
;




f
u
n
c
t
i
o
n
 
R
e
a
d
P
a
t
h
s
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
<
R
e
a
d
M
o
d
e
>
(
"
p
r
i
m
a
r
y
"
)
;


 
 
c
o
n
s
t
 
[
t
i
c
k
,
 
s
e
t
T
i
c
k
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
t
r
u
e
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
p
l
a
y
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
h
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
s
e
t
T
i
c
k
(
(
t
)
 
=
>
 
t
 
+
 
1
)
,
 
1
6
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
h
)
;


 
 
}
,
 
[
p
l
a
y
i
n
g
]
)
;




 
 
c
o
n
s
t
 
v
a
l
u
e
 
=
 
t
i
c
k
;


 
 
c
o
n
s
t
 
s
t
a
l
e
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
t
i
c
k
 
-
 
1
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
W
h
e
r
e
 
d
o
 
r
e
a
d
s
 
g
o
?
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
R
o
u
t
i
n
g
 
r
e
a
d
s
 
t
o
 
r
e
p
l
i
c
a
s
 
t
a
k
e
s
 
l
o
a
d
 
o
f
f
 
t
h
e
 
p
r
i
m
a
r
y
.
 
T
h
e
 
p
r
i
c
e
 
i
s
 
s
t
a
l
e
n
e
s
s
.
 
T
o
g
g
l
e
 
t
h
e


 
 
 
 
 
 
 
 
r
e
a
d
 
p
a
t
h
 
a
n
d
 
w
a
t
c
h
 
w
h
a
t
 
t
h
e
 
u
s
e
r
 
s
e
e
s
 
a
s
 
t
h
e
 
c
o
u
n
t
e
r
 
t
i
c
k
s
 
u
p
 
e
v
e
r
y
 
1
.
6
s
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
{
(
[
"
p
r
i
m
a
r
y
"
,
 
"
r
e
p
l
i
c
a
"
]
 
a
s
 
R
e
a
d
M
o
d
e
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
m
o
d
e
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
o
d
e
(
m
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
1
8
`
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
1
8
s
 
e
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
a
d
 
f
r
o
m
 
{
m
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
P
l
a
y
i
n
g
(
(
p
)
 
=
>
 
!
p
)
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
i
n
l
i
n
e
-
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
i
n
g
 
?
 
<
P
a
u
s
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
"
p
l
a
y
"
}


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
<
S
a
m
p
l
e


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
P
r
i
m
a
r
y
 
h
o
l
d
s
"


 
 
 
 
 
 
 
 
 
 
s
u
b
t
i
t
l
e
=
"
a
l
w
a
y
s
 
f
r
e
s
h
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
=
{
m
o
d
e
 
=
=
=
 
"
p
r
i
m
a
r
y
"
}


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
S
D
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
S
a
m
p
l
e


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
R
e
p
l
i
c
a
 
h
o
l
d
s
"


 
 
 
 
 
 
 
 
 
 
s
u
b
t
i
t
l
e
=
"
l
a
g
g
i
n
g
 
b
y
 
1
 
t
i
c
k
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
t
a
l
e
}


 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
=
{
m
o
d
e
 
=
=
=
 
"
r
e
p
l
i
c
a
"
}


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
N
E
U
T
R
A
L
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
k
e
y
=
{
m
o
d
e
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
U
S
E
R
 
S
E
E
S


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
L
a
t
e
s
t
 
v
a
l
u
e
,
 
e
v
e
r
y
 
t
i
m
e
.
 
B
u
t
 
t
h
e
 
p
r
i
m
a
r
y
 
i
s
 
d
o
i
n
g
 
e
v
e
r
y
 
r
e
a
d
 
a
n
d
 
e
v
e
r
y
 
w
r
i
t
e
.
 
T
h
a
t
'
s
 
a
 
s
i
n
g
l
e
 
b
o
t
t
l
e
n
e
c
k
 
f
o
r
 
t
h
e
 
e
n
t
i
r
e
 
f
l
e
e
t
.
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
O
l
d
 
v
a
l
u
e
 
s
o
m
e
t
i
m
e
s
.
 
T
h
e
 
u
s
e
r
 
p
o
s
t
e
d
,
 
t
h
e
n
 
o
p
e
n
e
d
 
t
h
e
i
r
 
f
e
e
d
,
 
a
n
d
 
d
i
d
n
'
t
 
s
e
e
 
t
h
e
i
r
 
o
w
n
 
p
o
s
t
.
 
R
e
a
d
-
y
o
u
r
-
o
w
n
-
w
r
i
t
e
s
 
f
a
i
l
e
d
.
"
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
S
a
m
p
l
e
(
{
 
l
a
b
e
l
,
 
s
u
b
t
i
t
l
e
,
 
v
a
l
u
e
,
 
h
i
g
h
l
i
g
h
t
,
 
c
o
l
o
r
 
}
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
s
u
b
t
i
t
l
e
:
 
s
t
r
i
n
g
;
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
h
i
g
h
l
i
g
h
t
:
 
b
o
o
l
e
a
n
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
b
o
r
d
e
r
C
o
l
o
r
:
 
h
i
g
h
l
i
g
h
t
 
?
 
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}


 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
 
}
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
"
,


 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
h
i
g
h
l
i
g
h
t
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t
I
d
=
"
r
e
a
d
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
8
0
,
 
d
a
m
p
i
n
g
:
 
3
0
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
1
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
v
{
v
a
l
u
e
}


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
T
o
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
{
s
u
b
t
i
t
l
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
F
a
i
l
o
v
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
F
a
i
l
o
v
e
r
S
t
a
g
e
 
=
 
"
h
e
a
l
t
h
y
"
 
|
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"
 
|
 
"
p
r
o
m
o
t
i
n
g
"
 
|
 
"
f
a
i
l
e
d
-
o
v
e
r
"
;




f
u
n
c
t
i
o
n
 
F
a
i
l
o
v
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
t
a
g
e
,
 
s
e
t
S
t
a
g
e
]
 
=
 
u
s
e
S
t
a
t
e
<
F
a
i
l
o
v
e
r
S
t
a
g
e
>
(
"
h
e
a
l
t
h
y
"
)
;




 
 
c
o
n
s
t
 
s
t
a
g
e
s
:
 
{
 
i
d
:
 
F
a
i
l
o
v
e
r
S
t
a
g
e
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
d
e
s
c
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
h
e
a
l
t
h
y
"
,
 
l
a
b
e
l
:
 
"
H
e
a
l
t
h
y
"
,
 
d
e
s
c
:
 
"
P
r
i
m
a
r
y
 
s
e
r
v
e
s
 
w
r
i
t
e
s
.
 
R
e
p
l
i
c
a
s
 
s
t
r
e
a
m
 
c
h
a
n
g
e
s
 
a
n
d
 
s
e
r
v
e
 
r
e
a
d
s
.
"
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"
,
 
l
a
b
e
l
:
 
"
P
r
i
m
a
r
y
 
f
a
i
l
s
"
,
 
d
e
s
c
:
 
"
C
r
a
s
h
,
 
n
e
t
w
o
r
k
 
p
a
r
t
i
t
i
o
n
,
 
h
a
r
d
w
a
r
e
 
f
a
i
l
u
r
e
.
 
W
r
i
t
e
s
 
s
t
a
r
t
 
t
o
 
e
r
r
o
r
 
o
u
t
.
"
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
r
o
m
o
t
i
n
g
"
,
 
l
a
b
e
l
:
 
"
P
r
o
m
o
t
i
n
g
 
r
e
p
l
i
c
a
"
,
 
d
e
s
c
:
 
"
C
o
o
r
d
i
n
a
t
o
r
 
p
i
c
k
s
 
t
h
e
 
m
o
s
t
 
u
p
-
t
o
-
d
a
t
e
 
r
e
p
l
i
c
a
 
a
n
d
 
p
r
o
m
o
t
e
s
 
i
t
.
"
 
}
,


 
 
 
 
{
 
i
d
:
 
"
f
a
i
l
e
d
-
o
v
e
r
"
,
 
l
a
b
e
l
:
 
"
F
a
i
l
e
d
 
o
v
e
r
"
,
 
d
e
s
c
:
 
"
N
e
w
 
p
r
i
m
a
r
y
 
a
c
c
e
p
t
s
 
w
r
i
t
e
s
.
 
O
l
d
 
p
r
i
m
a
r
y
,
 
w
h
e
n
 
i
t
 
r
e
t
u
r
n
s
,
 
b
e
c
o
m
e
s
 
a
 
r
e
p
l
i
c
a
.
"
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
W
h
a
t
 
h
a
p
p
e
n
s
 
w
h
e
n
 
t
h
e
 
p
r
i
m
a
r
y
 
d
i
e
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
R
e
p
l
i
c
a
t
i
o
n
 
i
s
 
a
l
s
o
 
y
o
u
r
 
f
a
i
l
o
v
e
r
 
p
l
a
n
.
 
W
a
t
c
h
 
t
h
e
 
c
l
u
s
t
e
r
 
r
e
c
o
v
e
r
.
 
E
a
c
h
 
s
t
e
p
 
h
a
s
 
a
 
r
e
a
l


 
 
 
 
 
 
 
 
p
r
o
d
u
c
t
i
o
n
 
c
o
s
t
 
i
n
 
l
a
t
e
n
c
y
 
a
n
d
 
l
o
s
t
 
w
r
i
t
e
s
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
b
-
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
{
s
t
a
g
e
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
s
.
i
d
 
=
=
=
 
s
t
a
g
e
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
S
t
a
g
e
(
s
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
2
2
`
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
 
·
 
{
s
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
 
 
m
i
n
H
e
i
g
h
t
:
 
2
8
0
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
2
0
 
2
4
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
7
6
0
,
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
p
r
i
m
a
r
y
 
b
o
x
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
F
a
i
l
o
v
e
r
N
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
6
0
}


 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
9
0
}


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
P
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
=
{
s
t
a
g
e
 
=
=
=
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"
 
?
 
"
D
O
W
N
"
 
:
 
s
t
a
g
e
 
=
=
=
 
"
f
a
i
l
e
d
-
o
v
e
r
"
 
?
 
"
d
e
m
o
t
e
d
"
 
:
 
"
l
e
a
d
e
r
"
}


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
g
e
 
=
=
=
 
"
h
e
a
l
t
h
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
S
D


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
t
a
g
e
 
=
=
=
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
#
4
7
5
5
6
9
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
t
a
g
e
 
=
=
=
 
"
p
r
o
m
o
t
i
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
#
4
7
5
5
6
9
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
N
E
U
T
R
A
L


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
c
r
a
s
h
e
d
=
{
s
t
a
g
e
 
=
=
=
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"
 
|
|
 
s
t
a
g
e
 
=
=
=
 
"
p
r
o
m
o
t
i
n
g
"
}


 
 
 
 
 
 
 
 
 
 
 
 
s
m
a
l
l
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
r
e
p
l
i
c
a
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
]
.
m
a
p
(
(
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
r
o
m
o
t
e
d
 
=
 
s
t
a
g
e
 
=
=
=
 
"
p
r
o
m
o
t
i
n
g
"
 
&
&
 
i
 
=
=
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
N
e
w
P
r
i
m
a
r
y
 
=
 
s
t
a
g
e
 
=
=
=
 
"
f
a
i
l
e
d
-
o
v
e
r
"
 
&
&
 
i
 
=
=
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
i
s
N
e
w
P
r
i
m
a
r
y
 
?
 
S
D
 
:
 
p
r
o
m
o
t
e
d
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
u
b
 
=
 
i
s
N
e
w
P
r
i
m
a
r
y
 
?
 
"
l
e
a
d
e
r
"
 
:
 
p
r
o
m
o
t
e
d
 
?
 
"
p
r
o
m
o
t
i
n
g
…
"
 
:
 
"
r
e
p
l
i
c
a
"
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
a
i
l
o
v
e
r
N
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
4
2
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
2
0
 
+
 
i
 
*
 
9
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
{
i
s
N
e
w
P
r
i
m
a
r
y
 
?
 
"
P
r
i
m
a
r
y
"
 
:
 
`
R
e
p
l
i
c
a
 
$
{
i
 
+
 
1
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
=
{
s
u
b
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
r
a
s
h
e
d
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
m
a
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
u
l
s
e
=
{
p
r
o
m
o
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
!
=
=
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
p
r
o
m
o
t
i
n
g
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
2
2
0
}
 
y
1
=
{
1
2
0
}
 
x
2
=
{
4
2
0
}
 
y
2
=
{
5
0
}
 
s
t
r
o
k
e
=
"
#
4
7
5
5
6
9
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
2
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
2
2
0
}
 
y
1
=
{
1
2
0
}
 
x
2
=
{
4
2
0
}
 
y
2
=
{
1
4
0
}
 
s
t
r
o
k
e
=
"
#
4
7
5
5
6
9
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
2
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
2
2
0
}
 
y
1
=
{
1
2
0
}
 
x
2
=
{
4
2
0
}
 
y
2
=
{
2
3
0
}
 
s
t
r
o
k
e
=
"
#
4
7
5
5
6
9
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
2
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
p
r
i
m
a
r
y
-
d
o
w
n
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
1
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
2
2
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
r
i
t
e
s
 
f
a
i
l
i
n
g
 
·
 
a
l
e
r
t
s
 
f
i
r
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
a
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
T
E
P
 
{
s
t
a
g
e
s
.
f
i
n
d
I
n
d
e
x
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
t
a
g
e
)
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
s
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
t
a
g
e
)
?
.
d
e
s
c
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
F
a
i
l
o
v
e
r
N
o
d
e
(
{


 
 
x
,


 
 
y
,


 
 
l
a
b
e
l
,


 
 
s
u
b
,


 
 
c
o
l
o
r
,


 
 
c
r
a
s
h
e
d
,


 
 
s
m
a
l
l
,


 
 
p
u
l
s
e
,


}
:
 
{


 
 
x
:
 
n
u
m
b
e
r
;


 
 
y
:
 
n
u
m
b
e
r
;


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
s
u
b
:
 
s
t
r
i
n
g
;


 
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;


 
 
c
r
a
s
h
e
d
:
 
b
o
o
l
e
a
n
;


 
 
s
m
a
l
l
:
 
b
o
o
l
e
a
n
;


 
 
p
u
l
s
e
?
:
 
b
o
o
l
e
a
n
;


}
)
 
{


 
 
c
o
n
s
t
 
w
 
=
 
s
m
a
l
l
 
?
 
1
6
0
 
:
 
1
6
0
;


 
 
c
o
n
s
t
 
h
 
=
 
s
m
a
l
l
 
?
 
6
0
 
:
 
7
0
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
p
u
l
s
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
r
e
c
t


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
h
}


 
 
 
 
 
 
 
 
 
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
.
3
5
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
1
.
1
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
.
2
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
r
e
c
t


 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
h
}


 
 
 
 
 
 
 
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
2
2
`
}


 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
c
r
a
s
h
e
d
 
?
 
"
5
 
4
"
 
:
 
"
0
"
}


 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
c
r
a
s
h
e
d
 
?
 
0
.
5
 
:
 
1
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
s
m
a
l
l
 
?
 
2
6
 
:
 
3
0
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
3
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
 
o
p
a
c
i
t
y
=
{
c
r
a
s
h
e
d
 
?
 
0
.
5
5
 
:
 
1
}
>


 
 
 
 
 
 
 
 
{
c
r
a
s
h
e
d
 
?
 
`
✕
 
$
{
l
a
b
e
l
}
`
 
:
 
l
a
b
e
l
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
s
m
a
l
l
 
?
 
4
6
 
:
 
5
2
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
{
1
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
 
o
p
a
c
i
t
y
=
{
c
r
a
s
h
e
d
 
?
 
0
.
7
 
:
 
1
}
>


 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
<
/
g
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
S
D
_
L
3
_
R
e
p
l
i
c
a
t
i
o
n
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
f
a
n
o
u
t
"
,
 
l
a
b
e
l
:
 
"
W
r
i
t
e
 
F
a
n
-
o
u
t
"
,
 
i
c
o
n
:
 
<
G
i
t
B
r
a
n
c
h
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
W
r
i
t
e
F
a
n
o
u
t
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
e
a
d
s
"
,
 
l
a
b
e
l
:
 
"
R
e
a
d
 
P
a
t
h
s
"
,
 
i
c
o
n
:
 
<
A
c
t
i
v
i
t
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
R
e
a
d
P
a
t
h
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
f
a
i
l
o
v
e
r
"
,
 
l
a
b
e
l
:
 
"
F
a
i
l
o
v
e
r
"
,
 
i
c
o
n
:
 
<
S
h
i
e
l
d
A
l
e
r
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
F
a
i
l
o
v
e
r
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
u
s
e
r
 
p
o
s
t
s
 
a
 
t
w
e
e
t
,
 
t
h
e
n
 
r
e
f
r
e
s
h
e
s
 
t
h
e
i
r
 
p
r
o
f
i
l
e
 
a
n
d
 
d
o
e
s
n
'
t
 
s
e
e
 
i
t
.
 
R
e
a
d
s
 
a
r
e
 
r
o
u
t
e
d
 
t
o
 
a
s
y
n
c
 
r
e
p
l
i
c
a
s
.
 
W
h
a
t
'
s
 
t
h
e
 
c
l
e
a
n
e
s
t
 
f
i
x
 
t
h
a
t
 
d
o
e
s
n
'
t
 
k
i
l
l
 
r
e
p
l
i
c
a
 
s
c
a
l
e
-
o
u
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
M
o
v
e
 
a
l
l
 
r
e
a
d
s
 
b
a
c
k
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
.
"
,


 
 
 
 
 
 
 
 
"
P
i
n
 
a
 
u
s
e
r
'
s
 
r
e
a
d
s
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
 
f
o
r
 
a
 
s
h
o
r
t
 
w
i
n
d
o
w
 
a
f
t
e
r
 
t
h
e
y
 
w
r
i
t
e
.
"
,


 
 
 
 
 
 
 
 
"
D
i
s
a
b
l
e
 
r
e
p
l
i
c
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
m
o
r
e
 
r
e
p
l
i
c
a
s
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
R
e
a
d
-
y
o
u
r
-
o
w
n
-
w
r
i
t
e
s
 
i
s
 
s
a
t
i
s
f
i
e
d
 
b
y
 
r
o
u
t
i
n
g
 
t
h
e
 
w
r
i
t
e
r
'
s
 
r
e
a
d
s
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
 
b
r
i
e
f
l
y
,
 
w
h
i
l
e
 
e
v
e
r
y
o
n
e
 
e
l
s
e
 
s
t
i
l
l
 
h
i
t
s
 
r
e
p
l
i
c
a
s
.
 
T
h
i
s
 
p
r
e
s
e
r
v
e
s
 
t
h
e
 
r
e
a
d
 
s
c
a
l
e
-
o
u
t
 
f
o
r
 
t
h
e
 
b
u
l
k
 
o
f
 
t
r
a
f
f
i
c
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
i
s
 
a
s
y
n
c
 
r
e
p
l
i
c
a
t
i
o
n
 
f
a
r
 
m
o
r
e
 
c
o
m
m
o
n
 
t
h
a
n
 
s
y
n
c
h
r
o
n
o
u
s
 
i
n
 
p
r
o
d
u
c
t
i
o
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
S
y
n
c
h
r
o
n
o
u
s
 
i
s
 
o
l
d
e
r
.
"
,


 
 
 
 
 
 
 
 
"
S
y
n
c
h
r
o
n
o
u
s
 
m
a
k
e
s
 
e
v
e
r
y
 
w
r
i
t
e
 
w
a
i
t
 
f
o
r
 
t
h
e
 
s
l
o
w
e
s
t
 
r
e
p
l
i
c
a
 
b
e
f
o
r
e
 
r
e
t
u
r
n
i
n
g
 
t
o
 
t
h
e
 
c
l
i
e
n
t
.
"
,


 
 
 
 
 
 
 
 
"
A
s
y
n
c
 
n
e
v
e
r
 
l
o
s
e
s
 
d
a
t
a
.
"
,


 
 
 
 
 
 
 
 
"
A
s
y
n
c
 
i
s
 
r
e
q
u
i
r
e
d
 
b
y
 
S
Q
L
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
W
i
t
h
 
s
y
n
c
 
r
e
p
l
i
c
a
t
i
o
n
,
 
e
a
c
h
 
w
r
i
t
e
 
b
l
o
c
k
s
 
o
n
 
t
h
e
 
s
l
o
w
e
s
t
 
a
c
k
n
o
w
l
e
d
g
i
n
g
 
r
e
p
l
i
c
a
.
 
T
h
e
 
l
a
t
e
n
c
y
 
c
o
s
t
 
i
s
 
h
i
g
h
 
a
n
d
 
a
 
s
l
o
w
 
r
e
p
l
i
c
a
 
c
a
n
 
s
t
a
l
l
 
t
h
e
 
w
h
o
l
e
 
c
l
u
s
t
e
r
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
P
r
i
m
a
r
y
 
j
u
s
t
 
d
i
e
d
.
 
W
h
i
c
h
 
r
e
p
l
i
c
a
 
s
h
o
u
l
d
 
b
e
 
p
r
o
m
o
t
e
d
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
h
e
 
o
l
d
e
s
t
 
r
e
p
l
i
c
a
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
r
e
p
l
i
c
a
 
w
i
t
h
 
t
h
e
 
m
o
s
t
 
r
e
c
e
n
t
 
a
p
p
l
i
e
d
 
w
r
i
t
e
 
(
s
m
a
l
l
e
s
t
 
r
e
p
l
i
c
a
t
i
o
n
 
l
a
g
)
.
"
,


 
 
 
 
 
 
 
 
"
A
n
y
 
r
e
p
l
i
c
a
,
 
t
h
e
y
'
r
e
 
a
l
l
 
i
d
e
n
t
i
c
a
l
.
"
,


 
 
 
 
 
 
 
 
"
W
h
i
c
h
e
v
e
r
 
r
e
p
l
i
c
a
 
r
e
s
p
o
n
d
s
 
f
i
r
s
t
 
t
o
 
a
 
p
i
n
g
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
P
r
o
m
o
t
i
n
g
 
t
h
e
 
m
o
s
t
 
u
p
-
t
o
-
d
a
t
e
 
r
e
p
l
i
c
a
 
m
i
n
i
m
i
z
e
s
 
d
a
t
a
 
l
o
s
s
.
 
T
h
e
 
o
t
h
e
r
 
r
e
p
l
i
c
a
s
 
t
h
e
n
 
r
e
-
s
y
n
c
 
f
r
o
m
 
t
h
e
 
n
e
w
 
p
r
i
m
a
r
y
'
s
 
s
t
a
t
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
d
d
i
n
g
 
5
 
r
e
a
d
 
r
e
p
l
i
c
a
s
 
h
e
l
p
s
 
y
o
u
 
s
c
a
l
e
 
_
_
_
_
 
b
u
t
 
n
o
t
 
_
_
_
_
.
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
w
r
i
t
e
s
 
/
 
r
e
a
d
s
"
,


 
 
 
 
 
 
 
 
"
r
e
a
d
s
 
/
 
w
r
i
t
e
s
"
,


 
 
 
 
 
 
 
 
"
s
t
o
r
a
g
e
 
/
 
l
a
t
e
n
c
y
"
,


 
 
 
 
 
 
 
 
"
c
o
n
s
i
s
t
e
n
c
y
 
/
 
a
v
a
i
l
a
b
i
l
i
t
y
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
R
e
p
l
i
c
a
s
 
m
u
l
t
i
p
l
y
 
r
e
a
d
 
t
h
r
o
u
g
h
p
u
t
 
(
e
a
c
h
 
o
n
e
 
c
a
n
 
a
n
s
w
e
r
 
q
u
e
r
i
e
s
)
 
b
u
t
 
e
v
e
r
y
 
w
r
i
t
e
 
s
t
i
l
l
 
h
a
s
 
t
o
 
b
e
 
a
p
p
l
i
e
d
 
o
n
 
e
v
e
r
y
 
r
e
p
l
i
c
a
,
 
s
o
 
w
r
i
t
e
 
c
a
p
a
c
i
t
y
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
t
h
e
 
p
r
i
m
a
r
y
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
D
a
t
a
b
a
s
e
 
R
e
p
l
i
c
a
t
i
o
n
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
2
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
s
t
a
n
d
a
r
d
 
'
h
o
w
 
d
o
 
y
o
u
 
s
c
a
l
e
 
r
e
a
d
s
'
 
a
n
s
w
e
r
 
i
n
 
H
L
D
 
r
o
u
n
d
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}




