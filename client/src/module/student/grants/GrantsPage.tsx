
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
S
t
a
t
e
,
 
u
s
e
M
e
m
o
,
 
u
s
e
C
a
l
l
b
a
c
k
,
 
m
e
m
o
 
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
 
m
o
t
i
o
n
,
 
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


 
 
S
e
a
r
c
h
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
,


 
 
X
,


 
 
D
o
l
l
a
r
S
i
g
n
,


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
A
l
e
r
t
C
i
r
c
l
e
,


 
 
L
o
c
k
,


 
 
C
h
e
v
r
o
n
D
o
w
n
,


 
 
W
a
n
d
2
,


 
 
G
l
o
b
e
,


 
 
T
a
g
,


 
 
U
s
e
r
s
,


 
 
A
r
r
o
w
U
p
R
i
g
h
t
,


 
 
I
n
f
o
,


 
 
B
o
o
k
m
a
r
k
,


 
 
B
o
o
k
m
a
r
k
C
h
e
c
k
,


 
 
C
l
i
p
b
o
a
r
d
L
i
s
t
,


 
 
C
l
o
c
k
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
 
{
 
g
r
a
n
t
s
,
 
G
R
A
N
T
_
C
A
T
E
G
O
R
I
E
S
,
 
t
y
p
e
 
G
r
a
n
t
,
 
t
y
p
e
 
G
r
a
n
t
C
a
t
e
g
o
r
y
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
D
a
t
a
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
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
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
 
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
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
K
i
c
k
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
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
u
i
/
K
i
c
k
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
 
r
e
s
o
l
v
e
G
r
a
n
t
L
o
g
o
(
l
o
g
o
:
 
s
t
r
i
n
g
,
 
w
e
b
s
i
t
e
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
l
o
g
o
 
&
&
 
!
l
o
g
o
.
i
n
c
l
u
d
e
s
(
"
p
l
a
c
e
h
o
l
d
.
c
o
"
)
)
 
r
e
t
u
r
n
 
l
o
g
o
;


 
 
t
r
y
 
{


 
 
 
 
c
o
n
s
t
 
d
o
m
a
i
n
 
=
 
n
e
w
 
U
R
L
(
w
e
b
s
i
t
e
)
.
h
o
s
t
n
a
m
e
;


 
 
 
 
r
e
t
u
r
n
 
`
h
t
t
p
s
:
/
/
w
w
w
.
g
o
o
g
l
e
.
c
o
m
/
s
2
/
f
a
v
i
c
o
n
s
?
d
o
m
a
i
n
=
$
{
d
o
m
a
i
n
}
&
s
z
=
1
2
8
`
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
l
o
g
o
;


 
 
}


}




c
o
n
s
t
 
S
T
A
T
U
S
_
C
O
N
F
I
G
 
=
 
{


 
 
A
c
t
i
v
e
:
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
c
o
l
o
r
:
 
"
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
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
b
o
r
d
e
r
-
l
i
m
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
l
i
m
e
-
9
0
0
/
6
0
"
 
}
,


 
 
P
a
u
s
e
d
:
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
A
l
e
r
t
C
i
r
c
l
e
,
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
a
m
b
e
r
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
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
b
o
r
d
e
r
-
a
m
b
e
r
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
a
m
b
e
r
-
9
0
0
/
6
0
"
 
}
,


 
 
"
I
n
v
i
t
e
 
O
n
l
y
"
:
 
{
 
i
c
o
n
:
 
L
o
c
k
,
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
v
i
o
l
e
t
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
v
i
o
l
e
t
-
4
0
0
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
b
o
r
d
e
r
-
v
i
o
l
e
t
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
v
i
o
l
e
t
-
9
0
0
/
6
0
"
 
}
,


}
;




c
o
n
s
t
 
E
C
O
S
Y
S
T
E
M
S
 
=
 
A
r
r
a
y
.
f
r
o
m
(
n
e
w
 
S
e
t
(
g
r
a
n
t
s
.
m
a
p
(
(
g
)
 
=
>
 
g
.
e
c
o
s
y
s
t
e
m
)
)
)
.
s
o
r
t
(
)
;


/
/
 
D
e
r
i
v
e
d
 
f
r
o
m
 
s
t
a
t
i
c
 
d
a
t
a
 
—
 
c
o
m
p
u
t
e
d
 
o
n
c
e
 
a
t
 
m
o
d
u
l
e
 
l
e
v
e
l
,
 
n
e
v
e
r
 
r
e
c
o
m
p
u
t
e
d


c
o
n
s
t
 
A
C
T
I
V
E
_
C
O
U
N
T
 
=
 
g
r
a
n
t
s
.
f
i
l
t
e
r
(
(
g
)
 
=
>
 
g
.
s
t
a
t
u
s
 
=
=
=
 
"
A
c
t
i
v
e
"
)
.
l
e
n
g
t
h
;




f
u
n
c
t
i
o
n
 
g
e
t
D
e
a
d
l
i
n
e
C
o
u
n
t
d
o
w
n
(
d
e
a
d
l
i
n
e
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
)
 
{


 
 
i
f
 
(
!
d
e
a
d
l
i
n
e
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
t
 
d
e
a
d
l
i
n
e
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
d
e
a
d
l
i
n
e
)
;


 
 
i
f
 
(
N
u
m
b
e
r
.
i
s
N
a
N
(
d
e
a
d
l
i
n
e
D
a
t
e
.
g
e
t
T
i
m
e
(
)
)
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
t
 
n
o
w
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
c
o
n
s
t
 
u
t
c
T
o
d
a
y
 
=
 
D
a
t
e
.
U
T
C
(
n
o
w
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
,
 
n
o
w
.
g
e
t
M
o
n
t
h
(
)
,
 
n
o
w
.
g
e
t
D
a
t
e
(
)
)
;


 
 
c
o
n
s
t
 
u
t
c
D
e
a
d
l
i
n
e
 
=
 
D
a
t
e
.
U
T
C
(
d
e
a
d
l
i
n
e
D
a
t
e
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
,
 
d
e
a
d
l
i
n
e
D
a
t
e
.
g
e
t
M
o
n
t
h
(
)
,
 
d
e
a
d
l
i
n
e
D
a
t
e
.
g
e
t
D
a
t
e
(
)
)
;


 
 
c
o
n
s
t
 
d
a
y
s
R
e
m
a
i
n
i
n
g
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
u
t
c
D
e
a
d
l
i
n
e
 
-
 
u
t
c
T
o
d
a
y
)
 
/
 
8
6
4
0
0
0
0
0
)
;




 
 
i
f
 
(
d
a
y
s
R
e
m
a
i
n
i
n
g
 
<
 
0
)
 
r
e
t
u
r
n
 
"
E
x
p
i
r
e
d
"
;


 
 
i
f
 
(
d
a
y
s
R
e
m
a
i
n
i
n
g
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
"
E
n
d
s
 
t
o
d
a
y
"
;


 
 
i
f
 
(
d
a
y
s
R
e
m
a
i
n
i
n
g
 
=
=
=
 
1
)
 
r
e
t
u
r
n
 
"
1
 
d
a
y
 
l
e
f
t
"
;


 
 
r
e
t
u
r
n
 
`
$
{
d
a
y
s
R
e
m
a
i
n
i
n
g
}
 
d
a
y
s
 
l
e
f
t
`
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
 
g
e
t
D
e
a
d
l
i
n
e
B
a
d
g
e
(
d
e
a
d
l
i
n
e
:
 
s
t
r
i
n
g
)
 
{


 
 
c
o
n
s
t
 
n
o
w
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
c
o
n
s
t
 
e
n
d
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
d
e
a
d
l
i
n
e
)
;




 
 
c
o
n
s
t
 
u
t
c
N
o
w
 
=
 
D
a
t
e
.
U
T
C
(


 
 
 
 
n
o
w
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
,


 
 
 
 
n
o
w
.
g
e
t
M
o
n
t
h
(
)
,


 
 
 
 
n
o
w
.
g
e
t
D
a
t
e
(
)


 
 
)
;




 
 
c
o
n
s
t
 
u
t
c
D
e
a
d
l
i
n
e
 
=
 
D
a
t
e
.
U
T
C
(


 
 
 
 
e
n
d
D
a
t
e
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
,


 
 
 
 
e
n
d
D
a
t
e
.
g
e
t
M
o
n
t
h
(
)
,


 
 
 
 
e
n
d
D
a
t
e
.
g
e
t
D
a
t
e
(
)


 
 
)
;




 
 
c
o
n
s
t
 
d
i
f
f
T
i
m
e
 
=
 
u
t
c
D
e
a
d
l
i
n
e
 
-
 
u
t
c
N
o
w
;




 
 
c
o
n
s
t
 
d
a
y
s
L
e
f
t
 
=
 
M
a
t
h
.
c
e
i
l
(
d
i
f
f
T
i
m
e
 
/
 
(
1
0
0
0
 
*
 
6
0
 
*
 
6
0
 
*
 
2
4
)
)
;




 
 
i
f
 
(
d
a
y
s
L
e
f
t
 
<
 
0
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
t
e
x
t
:
 
"
C
l
o
s
e
d
"
,


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
:


 
 
 
 
 
 
 
 
"
b
g
-
g
r
a
y
-
2
0
0
 
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
,


 
 
 
 
 
 
i
s
C
l
o
s
e
d
:
 
t
r
u
e
,


 
 
 
 
}
;


 
 
}




 
 
i
f
 
(
d
a
y
s
L
e
f
t
 
<
 
7
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
t
e
x
t
:
 
`
$
{
d
a
y
s
L
e
f
t
}
 
d
a
y
s
 
l
e
f
t
 
—
 
C
l
o
s
i
n
g
 
s
o
o
n
`
,


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
:


 
 
 
 
 
 
 
 
"
b
g
-
r
e
d
-
1
0
0
 
t
e
x
t
-
r
e
d
-
7
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
5
0
/
4
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
3
0
0
"
,


 
 
 
 
 
 
i
s
C
l
o
s
e
d
:
 
f
a
l
s
e
,


 
 
 
 
}
;


 
 
}




 
 
i
f
 
(
d
a
y
s
L
e
f
t
 
<
=
 
3
0
)
 
{


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
t
e
x
t
:
 
`
$
{
d
a
y
s
L
e
f
t
}
 
d
a
y
s
 
l
e
f
t
`
,


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
:


 
 
 
 
 
 
 
 
"
b
g
-
a
m
b
e
r
-
1
0
0
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
5
0
/
4
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
3
0
0
"
,


 
 
 
 
 
 
i
s
C
l
o
s
e
d
:
 
f
a
l
s
e
,


 
 
 
 
}
;


 
 
}




 
 
r
e
t
u
r
n
 
{


 
 
 
 
t
e
x
t
:
 
`
$
{
d
a
y
s
L
e
f
t
}
 
d
a
y
s
 
l
e
f
t
`
,


 
 
 
 
c
l
a
s
s
N
a
m
e
:


 
 
 
 
 
 
"
b
g
-
s
t
o
n
e
-
1
0
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
,


 
 
 
 
i
s
C
l
o
s
e
d
:
 
f
a
l
s
e
,


 
 
}
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
 
M
e
t
a
C
h
i
p
(
{
 
i
c
o
n
,
 
c
h
i
l
d
r
e
n
,
 
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
"
 
}
:
 
{
 
i
c
o
n
?
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;
 
c
l
a
s
s
N
a
m
e
?
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
s
p
a
n
 
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
{
`
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
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
m
d
 
$
{
c
l
a
s
s
N
a
m
e
 
|
|
 
"
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
}
`
}
>


 
 
 
 
 
 
{
i
c
o
n
 
&
&
 
<
s
p
a
n
 
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
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
{
i
c
o
n
}
<
/
s
p
a
n
>
}


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
s
p
a
n
>


 
 
)
;


}




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
 
G
r
a
n
t
s
P
a
g
e
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
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
"
"
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
,
 
s
e
t
S
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
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
G
r
a
n
t
C
a
t
e
g
o
r
y
 
|
 
"
A
L
L
"
>
(
"
A
L
L
"
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
,
 
s
e
t
S
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
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
s
t
r
i
n
g
>
(
"
A
L
L
"
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
S
t
a
t
u
s
,
 
s
e
t
S
e
l
e
c
t
e
d
S
t
a
t
u
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
s
t
r
i
n
g
>
(
"
A
L
L
"
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
G
r
a
n
t
,
 
s
e
t
S
e
l
e
c
t
e
d
G
r
a
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
<
G
r
a
n
t
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
F
i
l
t
e
r
s
,
 
s
e
t
S
h
o
w
F
i
l
t
e
r
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
s
a
v
e
d
G
r
a
n
t
s
,
 
s
e
t
S
a
v
e
d
G
r
a
n
t
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
S
e
t
<
n
u
m
b
e
r
>
>
(
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
o
r
e
d
 
=
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
"
s
a
v
e
d
G
r
a
n
t
s
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
s
t
o
r
e
d
 
?
 
n
e
w
 
S
e
t
(
J
S
O
N
.
p
a
r
s
e
(
s
t
o
r
e
d
)
)
 
:
 
n
e
w
 
S
e
t
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
w
 
S
e
t
(
)
;


 
 
 
 
}


 
 
}
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
S
a
v
e
d
O
n
l
y
,
 
s
e
t
S
h
o
w
S
a
v
e
d
O
n
l
y
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
 
t
o
g
g
l
e
S
a
v
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
g
r
a
n
t
I
d
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
 
{


 
 
 
 
s
e
t
S
a
v
e
d
G
r
a
n
t
s
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
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
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
g
r
a
n
t
I
d
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
g
r
a
n
t
I
d
)
;


 
 
 
 
 
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
g
r
a
n
t
I
d
)
;


 
 
 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
"
s
a
v
e
d
G
r
a
n
t
s
"
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
[
.
.
.
n
e
x
t
]
)
)
;


 
 
 
 
 
 
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
 
[
]
)
;




 
 
/
/
 
S
t
a
b
l
e
 
c
a
l
l
b
a
c
k
s
 
p
a
s
s
e
d
 
i
n
t
o
 
m
e
m
o
'
d
 
G
r
a
n
t
C
a
r
d
 
—
 
n
e
v
e
r
 
r
e
c
r
e
a
t
e
d
 
b
e
t
w
e
e
n
 
r
e
n
d
e
r
s


 
 
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
C
a
r
d
S
e
l
e
c
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
g
r
a
n
t
:
 
G
r
a
n
t
)
 
=
>
 
s
e
t
S
e
l
e
c
t
e
d
G
r
a
n
t
(
g
r
a
n
t
)
,
 
[
]
)
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
C
l
o
s
e
M
o
d
a
l
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
s
e
t
S
e
l
e
c
t
e
d
G
r
a
n
t
(
n
u
l
l
)
,
 
[
]
)
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
l
e
t
 
r
e
s
u
l
t
 
=
 
g
r
a
n
t
s
.
f
i
l
t
e
r
(
(
g
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
!
=
=
 
"
A
L
L
"
 
&
&
 
g
.
c
a
t
e
g
o
r
y
 
!
=
=
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
 
!
=
=
 
"
A
L
L
"
 
&
&
 
g
.
e
c
o
s
y
s
t
e
m
 
!
=
=
 
s
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
S
t
a
t
u
s
 
!
=
=
 
"
A
L
L
"
 
&
&
 
g
.
s
t
a
t
u
s
 
!
=
=
 
s
e
l
e
c
t
e
d
S
t
a
t
u
s
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
s
e
a
r
c
h
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
q
 
=
 
s
e
a
r
c
h
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
g
.
n
a
m
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
g
.
o
r
g
a
n
i
z
a
t
i
o
n
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
g
.
e
c
o
s
y
s
t
e
m
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
g
.
t
a
g
s
.
s
o
m
e
(
(
t
)
 
=
>
 
t
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
)


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
r
e
t
u
r
n
 
t
r
u
e
;


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
s
h
o
w
S
a
v
e
d
O
n
l
y
)
 
r
e
s
u
l
t
 
=
 
r
e
s
u
l
t
.
f
i
l
t
e
r
(
(
g
)
 
=
>
 
s
a
v
e
d
G
r
a
n
t
s
.
h
a
s
(
g
.
i
d
)
)
;


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
=
=
=
 
"
A
L
L
"
 
&
&
 
!
s
e
a
r
c
h
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
c
a
t
O
r
d
e
r
 
=
 
n
e
w
 
M
a
p
(
G
R
A
N
T
_
C
A
T
E
G
O
R
I
E
S
.
m
a
p
(
(
c
,
 
i
)
 
=
>
 
[
c
,
 
i
]
)
)
;


 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
[
.
.
.
r
e
s
u
l
t
]
.
s
o
r
t
(


 
 
 
 
 
 
 
 
(
a
,
 
b
)
 
=
>
 
(
c
a
t
O
r
d
e
r
.
g
e
t
(
a
.
c
a
t
e
g
o
r
y
)
 
?
?
 
9
9
)
 
-
 
(
c
a
t
O
r
d
e
r
.
g
e
t
(
b
.
c
a
t
e
g
o
r
y
)
 
?
?
 
9
9
)
,


 
 
 
 
 
 
)
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
;


 
 
}
,
 
[
s
e
a
r
c
h
,
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
,
 
s
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
,
 
s
e
l
e
c
t
e
d
S
t
a
t
u
s
,
 
s
h
o
w
S
a
v
e
d
O
n
l
y
,
 
s
a
v
e
d
G
r
a
n
t
s
]
)
;




 
 
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
F
i
l
t
e
r
s
 
=


 
 
 
 
(
s
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
 
!
=
=
 
"
A
L
L
"
 
?
 
1
 
:
 
0
)
 
+


 
 
 
 
(
s
e
l
e
c
t
e
d
S
t
a
t
u
s
 
!
=
=
 
"
A
L
L
"
 
?
 
1
 
:
 
0
)
;




 
 
c
o
n
s
t
 
c
l
e
a
r
F
i
l
t
e
r
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
(
"
A
L
L
"
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
(
"
A
L
L
"
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
S
t
a
t
u
s
(
"
A
L
L
"
)
;


 
 
 
 
s
e
t
S
e
a
r
c
h
(
"
"
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
r
e
l
a
t
i
v
e
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
b
-
1
2
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
G
r
a
n
t
s
 
&
 
F
u
n
d
i
n
g
 
f
o
r
 
S
t
u
d
e
n
t
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
D
i
s
c
o
v
e
r
 
g
r
a
n
t
s
,
 
s
c
h
o
l
a
r
s
h
i
p
s
,
 
a
n
d
 
f
u
n
d
i
n
g
 
o
p
p
o
r
t
u
n
i
t
i
e
s
 
f
o
r
 
s
t
u
d
e
n
t
s
.
 
B
r
o
w
s
e
 
t
e
c
h
 
g
r
a
n
t
s
,
 
r
e
s
e
a
r
c
h
 
f
u
n
d
i
n
g
,
 
a
n
d
 
s
t
a
r
t
u
p
 
g
r
a
n
t
s
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
s
t
u
d
e
n
t
 
g
r
a
n
t
s
,
 
t
e
c
h
 
s
c
h
o
l
a
r
s
h
i
p
s
,
 
r
e
s
e
a
r
c
h
 
f
u
n
d
i
n
g
,
 
s
t
a
r
t
u
p
 
g
r
a
n
t
s
,
 
s
t
u
d
e
n
t
 
f
u
n
d
i
n
g
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
g
r
a
n
t
s
"
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
-
0
"


 
 
 
 
 
 
 
 
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
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
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
 
1
p
x
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
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
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
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
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
 
1
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
4
 
}
}


 
 
 
 
 
 
 
 
 
 
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
m
t
-
6
 
m
b
-
1
0
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
s
t
u
d
e
n
t
 
/
 
g
r
a
n
t
s
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
m
t
-
4
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
u
n
d
 
y
o
u
r
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
w
o
r
k
.
<
/
s
p
a
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
X
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
 
s
c
a
l
e
X
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
 
0
.
7
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
b
g
-
l
i
m
e
-
4
0
0
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
m
t
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
r
a
n
t
s
,
 
s
c
h
o
l
a
r
s
h
i
p
s
,
 
a
n
d
 
f
u
n
d
i
n
g
 
a
c
r
o
s
s
 
W
e
b
3
,
 
g
o
v
e
r
n
m
e
n
t
,
 
r
e
s
e
a
r
c
h
,
 
c
l
i
m
a
t
e
,
 
a
n
d
 
A
I
,
 
c
u
r
a
t
e
d
 
f
o
r
 
s
t
u
d
e
n
t
 
b
u
i
l
d
e
r
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
4
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
t
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
s
.
l
e
n
g
t
h
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
A
C
T
I
V
E
_
C
O
U
N
T
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
c
o
s
y
s
t
e
m
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
E
C
O
S
Y
S
T
E
M
S
.
l
e
n
g
t
h
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




 
 
 
 
 
 
 
 
{
/
*
 
T
r
a
c
k
e
r
 
s
t
r
i
p
 
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
 
1
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
e
l
a
y
:
 
0
.
0
5
 
}
}


 
 
 
 
 
 
 
 
 
 
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
m
b
-
6
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
s
t
u
d
e
n
t
/
g
r
a
n
t
s
/
t
r
a
c
k
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
p
 
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
4
 
p
x
-
5
 
p
y
-
4
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
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
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
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
w
-
9
 
h
-
9
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
i
p
b
o
a
r
d
L
i
s
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
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
 
/
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
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
p
p
l
i
c
a
t
i
o
n
 
t
r
a
c
k
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
a
d
l
i
n
e
s
 
/
 
s
t
a
t
u
s
e
s
 
/
 
f
o
l
l
o
w
-
u
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
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
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
a
l
l
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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




 
 
 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
+
 
f
i
l
t
e
r
s
 
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
 
1
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
m
b
-
8
 
s
p
a
c
e
-
y
-
4
"


 
 
 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
a
r
c
h
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
g
r
a
n
t
s
 
b
y
 
n
a
m
e
,
 
o
r
g
a
n
i
z
a
t
i
o
n
,
 
o
r
 
e
c
o
s
y
s
t
e
m
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
u
l
l
 
p
l
-
1
1
 
p
r
-
4
 
p
y
-
3
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
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
-
c
o
l
o
r
s
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
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
s
p
a
n
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
r
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
 
/


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
A
L
L
"
,
 
.
.
.
G
R
A
N
T
_
C
A
T
E
G
O
R
I
E
S
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
c
a
t
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
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
=
=
=
 
c
a
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
a
t
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
e
l
a
y
:
 
i
 
*
 
0
.
0
2
,
 
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
(
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
 
=
=
=
 
"
A
L
L
"
 
?
 
"
A
L
L
"
 
:
 
c
a
t
 
=
=
=
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
?
 
"
A
L
L
"
 
:
 
c
a
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
b
o
r
d
e
r
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
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
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
t
 
=
=
=
 
"
A
L
L
"
 
?
 
"
A
l
l
"
 
:
 
c
a
t
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
o
w
F
i
l
t
e
r
s
(
!
s
h
o
w
F
i
l
t
e
r
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
1
.
5
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
b
o
r
d
e
r
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
F
i
l
t
e
r
s
 
>
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
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
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
r
e
 
f
i
l
t
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
F
i
l
t
e
r
s
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
h
-
4
 
m
i
n
-
w
-
4
 
p
x
-
1
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
b
o
l
d
 
r
o
u
n
d
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
F
i
l
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
n
 
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
{
`
w
-
3
 
h
-
3
 
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
-
t
r
a
n
s
f
o
r
m
 
$
{
s
h
o
w
F
i
l
t
e
r
s
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
o
w
S
a
v
e
d
O
n
l
y
(
!
s
h
o
w
S
a
v
e
d
O
n
l
y
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
1
.
5
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
b
o
r
d
e
r
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
o
w
S
a
v
e
d
O
n
l
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
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
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
o
k
m
a
r
k
 
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
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
a
v
e
d
 
(
{
s
a
v
e
d
G
r
a
n
t
s
.
s
i
z
e
}
)


 
 
 
 
 
 
 
 
 
 
 
 
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
(
a
c
t
i
v
e
F
i
l
t
e
r
s
 
>
 
0
 
|
|
 
s
e
a
r
c
h
 
|
|
 
s
e
l
e
c
t
e
d
C
a
t
e
g
o
r
y
 
!
=
=
 
"
A
L
L
"
 
|
|
 
s
h
o
w
S
a
v
e
d
O
n
l
y
)
 
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
9
 
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
 
s
c
a
l
e
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
,
 
s
c
a
l
e
:
 
0
.
9
 
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
1
5
 
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
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
e
a
r
F
i
l
t
e
r
s
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
S
a
v
e
d
O
n
l
y
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
r
e
d
-
5
0
0
 
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
-
c
o
l
o
r
s
 
b
o
r
d
e
r
-
0
 
b
g
-
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
 
h
-
3
"
 
/
>
 
c
l
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
F
i
l
t
e
r
s
 
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
 
h
e
i
g
h
t
:
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
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
 
h
e
i
g
h
t
:
 
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
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
4
 
p
-
4
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
c
o
s
y
s
t
e
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
l
e
c
t
e
d
E
c
o
s
y
s
t
e
m
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
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
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
L
L
"
>
A
l
l
 
e
c
o
s
y
s
t
e
m
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
E
C
O
S
Y
S
T
E
M
S
.
m
a
p
(
(
e
c
o
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
e
c
o
}
 
v
a
l
u
e
=
{
e
c
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
c
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
l
e
c
t
e
d
S
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
l
e
c
t
e
d
S
t
a
t
u
s
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
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
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
L
L
"
>
A
l
l
 
s
t
a
t
u
s
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
c
t
i
v
e
"
>
A
c
t
i
v
e
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
P
a
u
s
e
d
"
>
P
a
u
s
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
I
n
v
i
t
e
 
O
n
l
y
"
>
I
n
v
i
t
e
 
O
n
l
y
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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




 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
h
e
a
d
e
r
 
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
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
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
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
 
/
 
f
u
n
d
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
m
t
-
2
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
S
a
v
e
d
O
n
l
y
 
?
 
"
S
a
v
e
d
 
g
r
a
n
t
s
"
 
:
 
"
A
v
a
i
l
a
b
l
e
 
g
r
a
n
t
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
i
d
d
e
n
 
s
m
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
}
 
r
e
s
u
l
t
s


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
s
 
*
/
}


 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
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
p
y
-
2
0
 
t
e
x
t
-
c
e
n
t
e
r
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
N
o
 
g
r
a
n
t
s
 
m
a
t
c
h
 
y
o
u
r
 
f
i
l
t
e
r
s
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
y
 
d
i
f
f
e
r
e
n
t
 
s
e
a
r
c
h
 
c
r
i
t
e
r
i
a


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
c
l
e
a
r
F
i
l
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
4
 
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
1
.
5
 
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
5
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
e
a
r
 
f
i
l
t
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
m
a
p
(
(
g
r
a
n
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
r
a
n
t
C
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
g
r
a
n
t
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
r
a
n
t
=
{
g
r
a
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
S
e
l
e
c
t
=
{
h
a
n
d
l
e
C
a
r
d
S
e
l
e
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
a
v
e
d
=
{
s
a
v
e
d
G
r
a
n
t
s
.
h
a
s
(
g
r
a
n
t
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
T
o
g
g
l
e
S
a
v
e
=
{
t
o
g
g
l
e
S
a
v
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
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
>


 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
G
r
a
n
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
G
r
a
n
t
D
e
t
a
i
l
M
o
d
a
l
 
g
r
a
n
t
=
{
s
e
l
e
c
t
e
d
G
r
a
n
t
}
 
o
n
C
l
o
s
e
=
{
h
a
n
d
l
e
C
l
o
s
e
M
o
d
a
l
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




c
o
n
s
t
 
G
r
a
n
t
C
a
r
d
 
=
 
m
e
m
o
(
f
u
n
c
t
i
o
n
 
G
r
a
n
t
C
a
r
d
(
{


 
 
g
r
a
n
t
,


 
 
i
n
d
e
x
,


 
 
o
n
S
e
l
e
c
t
,


 
 
s
a
v
e
d
,


 
 
o
n
T
o
g
g
l
e
S
a
v
e
,


}
:
 
{


 
 
g
r
a
n
t
:
 
G
r
a
n
t
;


 
 
i
n
d
e
x
:
 
n
u
m
b
e
r
;


 
 
o
n
S
e
l
e
c
t
:
 
(
g
r
a
n
t
:
 
G
r
a
n
t
)
 
=
>
 
v
o
i
d
;


 
 
s
a
v
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


 
 
o
n
T
o
g
g
l
e
S
a
v
e
:
 
(
i
d
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
;


}
)
 
{


 
 
c
o
n
s
t
 
s
t
a
t
u
s
C
f
g
 
=
 
S
T
A
T
U
S
_
C
O
N
F
I
G
[
g
r
a
n
t
.
s
t
a
t
u
s
]
;


 
 
c
o
n
s
t
 
S
t
a
t
u
s
I
c
o
n
 
=
 
s
t
a
t
u
s
C
f
g
.
i
c
o
n
;


 
 
c
o
n
s
t
 
l
o
g
o
S
r
c
 
=
 
r
e
s
o
l
v
e
G
r
a
n
t
L
o
g
o
(
g
r
a
n
t
.
l
o
g
o
,
 
g
r
a
n
t
.
w
e
b
s
i
t
e
)
;


 
 
c
o
n
s
t
 
c
o
u
n
t
d
o
w
n
 
=
 
g
e
t
D
e
a
d
l
i
n
e
C
o
u
n
t
d
o
w
n
(
g
r
a
n
t
.
d
e
a
d
l
i
n
e
)
;


 
 
c
o
n
s
t
 
d
e
a
d
l
i
n
e
B
a
d
g
e
 
=
 
g
e
t
D
e
a
d
l
i
n
e
B
a
d
g
e
(
g
r
a
n
t
.
d
e
a
d
l
i
n
e
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
 
1
2
 
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
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
3
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
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
 
o
n
S
e
l
e
c
t
(
g
r
a
n
t
)
}


 
 
 
 
 
 
 
 
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
{
`
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
p
-
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
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
-
c
o
l
o
r
s
 
h
-
f
u
l
l
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
$
{


 
 
d
e
a
d
l
i
n
e
B
a
d
g
e
.
i
s
C
l
o
s
e
d
 
?
 
"
o
p
a
c
i
t
y
-
6
0
"
 
:
 
"
"


}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
r
o
l
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
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
o
n
T
o
g
g
l
e
S
a
v
e
(
g
r
a
n
t
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
p
-
1
 
r
o
u
n
d
e
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
s
a
v
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
o
k
m
a
r
k
C
h
e
c
k
 
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
 
t
e
x
t
-
l
i
m
e
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
o
k
m
a
r
k
 
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
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
s
t
a
r
t
 
g
a
p
-
3
 
m
b
-
3
 
p
r
-
1
0
"
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
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
l
o
g
o
S
r
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
g
r
a
n
t
.
o
r
g
a
n
i
z
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
6
 
h
-
6
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
m
g
 
=
 
e
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
I
m
a
g
e
E
l
e
m
e
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
p
a
n
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
s
p
a
n
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
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
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
t
e
x
t
C
o
n
t
e
n
t
 
=
 
g
r
a
n
t
.
o
r
g
a
n
i
z
a
t
i
o
n
.
c
h
a
r
A
t
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
p
a
r
e
n
t
E
l
e
m
e
n
t
?
.
a
p
p
e
n
d
C
h
i
l
d
(
s
p
a
n
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
i
n
e
-
c
l
a
m
p
-
1
 
l
e
a
d
i
n
g
-
t
i
g
h
t
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
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
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
0
.
5
 
b
l
o
c
k
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
o
r
g
a
n
i
z
a
t
i
o
n
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




 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
i
n
e
-
c
l
a
m
p
-
2
 
m
b
-
4
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
S
t
a
t
u
s
I
c
o
n
 
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
{
`
w
-
3
 
h
-
3
 
$
{
s
t
a
t
u
s
C
f
g
.
c
o
l
o
r
}
`
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
$
{
s
t
a
t
u
s
C
f
g
.
c
o
l
o
r
}
 
$
{
s
t
a
t
u
s
C
f
g
.
b
o
r
d
e
r
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
s
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
{
c
o
u
n
t
d
o
w
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
C
l
o
c
k
 
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
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
s
l
a
t
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
l
a
t
e
-
2
0
0
 
b
o
r
d
e
r
-
s
l
a
t
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
s
l
a
t
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
u
n
t
d
o
w
n
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
D
o
l
l
a
r
S
i
g
n
 
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
 
h
-
3
"
 
/
>
}
>
{
g
r
a
n
t
.
f
u
n
d
i
n
g
A
m
o
u
n
t
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
G
l
o
b
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
 
h
-
3
"
 
/
>
}
>
{
g
r
a
n
t
.
e
c
o
s
y
s
t
e
m
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
T
a
g
 
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
 
h
-
3
"
 
/
>
}
>
{
g
r
a
n
t
.
c
a
t
e
g
o
r
y
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
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
{
`
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
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
$
{
d
e
a
d
l
i
n
e
B
a
d
g
e
.
c
l
a
s
s
N
a
m
e
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
a
d
l
i
n
e
B
a
d
g
e
.
t
e
x
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
m
t
-
a
u
t
o
 
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
t
-
3
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
 
d
e
t
a
i
l
s


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
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
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
a
l
l
"
 
/
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
)
;




f
u
n
c
t
i
o
n
 
G
r
a
n
t
D
e
t
a
i
l
M
o
d
a
l
(
{
 
g
r
a
n
t
,
 
o
n
C
l
o
s
e
 
}
:
 
{
 
g
r
a
n
t
:
 
G
r
a
n
t
;
 
o
n
C
l
o
s
e
:
 
(
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
 
s
t
a
t
u
s
C
f
g
 
=
 
S
T
A
T
U
S
_
C
O
N
F
I
G
[
g
r
a
n
t
.
s
t
a
t
u
s
]
;


 
 
c
o
n
s
t
 
S
t
a
t
u
s
I
c
o
n
 
=
 
s
t
a
t
u
s
C
f
g
.
i
c
o
n
;


 
 
c
o
n
s
t
 
l
o
g
o
S
r
c
 
=
 
r
e
s
o
l
v
e
G
r
a
n
t
L
o
g
o
(
g
r
a
n
t
.
l
o
g
o
,
 
g
r
a
n
t
.
w
e
b
s
i
t
e
)
;


 
 
c
o
n
s
t
 
d
e
a
d
l
i
n
e
B
a
d
g
e
 
=
 
g
e
t
D
e
a
d
l
i
n
e
B
a
d
g
e
(
g
r
a
n
t
.
d
e
a
d
l
i
n
e
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
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
5
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
-
4
 
b
g
-
s
t
o
n
e
-
9
5
0
/
6
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
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
o
n
C
l
o
s
e
}


 
 
 
 
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
,
 
y
:
 
1
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
 
s
c
a
l
e
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
,
 
y
:
 
1
6
 
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
 
}
}


 
 
 
 
 
 
 
 
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
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
s
h
a
d
o
w
-
2
x
l
 
w
-
f
u
l
l
 
m
a
x
-
w
-
2
x
l
 
m
a
x
-
h
-
[
8
5
v
h
]
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
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
e
)
 
=
>
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
}


 
 
 
 
 
 
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
s
t
i
c
k
y
 
t
o
p
-
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
x
-
6
 
p
y
-
4
 
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
z
-
1
0
"
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
3
 
m
i
n
-
w
-
0
"
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
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
l
o
g
o
S
r
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
g
r
a
n
t
.
o
r
g
a
n
i
z
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
6
 
h
-
6
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
m
g
 
=
 
e
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
I
m
a
g
e
E
l
e
m
e
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
p
a
n
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
s
p
a
n
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
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
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
t
e
x
t
C
o
n
t
e
n
t
 
=
 
g
r
a
n
t
.
o
r
g
a
n
i
z
a
t
i
o
n
.
c
h
a
r
A
t
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
p
a
r
e
n
t
E
l
e
m
e
n
t
?
.
a
p
p
e
n
d
C
h
i
l
d
(
s
p
a
n
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
o
r
g
a
n
i
z
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
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
p
-
1
.
5
 
r
o
u
n
d
e
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
0
0
 
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
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
s
h
r
i
n
k
-
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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
p
x
-
6
 
p
y
-
6
 
s
p
a
c
e
-
y
-
6
"
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
S
t
a
t
u
s
I
c
o
n
 
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
{
`
w
-
3
 
h
-
3
 
$
{
s
t
a
t
u
s
C
f
g
.
c
o
l
o
r
}
`
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
$
{
s
t
a
t
u
s
C
f
g
.
c
o
l
o
r
}
 
$
{
s
t
a
t
u
s
C
f
g
.
b
o
r
d
e
r
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
s
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
D
o
l
l
a
r
S
i
g
n
 
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
 
h
-
3
"
 
/
>
}
>
{
g
r
a
n
t
.
f
u
n
d
i
n
g
A
m
o
u
n
t
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
G
l
o
b
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
 
h
-
3
"
 
/
>
}
>
{
g
r
a
n
t
.
e
c
o
s
y
s
t
e
m
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
p
 
i
c
o
n
=
{
<
T
a
g
 
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
 
h
-
3
"
 
/
>
}
>
{
g
r
a
n
t
.
c
a
t
e
g
o
r
y
}
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
$
{
d
e
a
d
l
i
n
e
B
a
d
g
e
.
c
l
a
s
s
N
a
m
e
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
a
d
l
i
n
e
B
a
d
g
e
.
t
e
x
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
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
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
f
o
 
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
 
h
-
3
"
 
/
>
 
a
b
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
W
a
n
d
2
 
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
 
h
-
3
 
t
e
x
t
-
l
i
m
e
-
5
0
0
"
 
/
>
 
h
i
g
h
l
i
g
h
t
s


 
 
 
 
 
 
 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
h
i
g
h
l
i
g
h
t
s
.
m
a
p
(
(
h
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
}
 
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
s
t
a
r
t
 
g
a
p
-
2
.
5
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
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
 
t
e
x
t
-
l
i
m
e
-
5
0
0
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
<
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
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
s
 
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
 
h
-
3
"
 
/
>
 
e
l
i
g
i
b
i
l
i
t
y


 
 
 
 
 
 
 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
e
l
i
g
i
b
i
l
i
t
y
.
m
a
p
(
(
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
}
 
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
s
t
a
r
t
 
g
a
p
-
2
.
5
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
1
 
h
-
1
 
b
g
-
l
i
m
e
-
4
0
0
 
m
t
-
2
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
<
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
s


 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
a
n
t
.
t
a
g
s
.
m
a
p
(
(
t
a
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
x
-
2
 
p
y
-
0
.
5
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
r
o
u
n
d
e
d
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
g
r
a
n
t
.
w
e
b
s
i
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
p
 
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
 
j
u
s
t
i
f
y
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
 
w
-
f
u
l
l
 
p
y
-
3
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
l
i
m
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
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
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
A
p
p
l
y
 
n
o
w


 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
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
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
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


