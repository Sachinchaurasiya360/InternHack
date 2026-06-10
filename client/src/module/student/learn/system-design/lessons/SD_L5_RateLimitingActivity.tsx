
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
M
e
m
o
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
 
B
o
o
k
O
p
e
n
,
 
G
l
o
b
e
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
 
Z
a
p
 
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
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
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
 
D
e
f
i
n
i
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




c
o
n
s
t
 
A
L
G
O
S
 
=
 
[


 
 
{


 
 
 
 
n
a
m
e
:
 
"
T
o
k
e
n
 
B
u
c
k
e
t
"
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


 
 
 
 
s
h
o
r
t
:
 
"
b
u
r
s
t
-
f
r
i
e
n
d
l
y
"
,


 
 
 
 
l
o
n
g
:
 
"
B
u
c
k
e
t
 
h
o
l
d
s
 
u
p
 
t
o
 
N
 
t
o
k
e
n
s
.
 
R
e
f
i
l
l
s
 
a
t
 
R
 
t
o
k
e
n
s
/
s
e
c
.
 
E
a
c
h
 
r
e
q
u
e
s
t
 
c
o
n
s
u
m
e
s
 
a
 
t
o
k
e
n
.
 
A
l
l
o
w
s
 
b
u
r
s
t
s
 
u
p
 
t
o
 
N
 
w
h
e
n
 
t
h
e
 
b
u
c
k
e
t
 
i
s
 
f
u
l
l
.
"
,


 
 
 
 
p
r
o
:
 
"
B
u
r
s
t
s
 
a
l
l
o
w
e
d
 
(
g
o
o
d
 
f
o
r
 
h
u
m
a
n
 
t
r
a
f
f
i
c
)
.
"
,


 
 
 
 
c
o
n
:
 
"
A
 
u
s
e
r
 
c
a
n
 
d
r
a
i
n
 
t
h
e
 
b
u
c
k
e
t
 
t
h
e
n
 
i
d
l
e
 
f
o
r
 
a
 
w
h
i
l
e
 
t
o
 
r
e
f
i
l
l
 
—
 
g
a
m
e
a
b
l
e
 
f
o
r
 
s
u
s
t
a
i
n
e
d
 
a
t
t
a
c
k
 
v
i
a
 
t
i
m
e
d
 
b
u
r
s
t
s
.
"
,


 
 
 
 
e
x
:
 
"
A
W
S
 
A
P
I
 
G
a
t
e
w
a
y
,
 
S
t
r
i
p
e
,
 
m
o
s
t
 
p
u
b
l
i
c
 
A
P
I
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
L
e
a
k
y
 
B
u
c
k
e
t
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
s
h
o
r
t
:
 
"
s
m
o
o
t
h
 
o
u
t
p
u
t
"
,


 
 
 
 
l
o
n
g
:
 
"
R
e
q
u
e
s
t
s
 
e
n
t
e
r
 
a
 
q
u
e
u
e
 
(
t
h
e
 
b
u
c
k
e
t
)
.
 
D
r
a
i
n
e
d
 
a
t
 
f
i
x
e
d
 
r
a
t
e
 
R
.
 
I
f
 
t
h
e
 
q
u
e
u
e
 
o
v
e
r
f
l
o
w
s
 
c
a
p
a
c
i
t
y
 
N
,
 
r
e
q
u
e
s
t
s
 
a
r
e
 
d
r
o
p
p
e
d
.
"
,


 
 
 
 
p
r
o
:
 
"
O
u
t
p
u
t
 
i
s
 
p
e
r
f
e
c
t
l
y
 
s
m
o
o
t
h
 
—
 
p
r
o
t
e
c
t
s
 
d
o
w
n
s
t
r
e
a
m
 
f
r
o
m
 
b
u
r
s
t
s
.
"
,


 
 
 
 
c
o
n
:
 
"
G
e
n
u
i
n
e
 
b
u
r
s
t
s
 
g
e
t
 
q
u
e
u
e
d
 
o
r
 
d
r
o
p
p
e
d
.
 
U
s
e
r
-
p
e
r
c
e
i
v
e
d
 
l
a
t
e
n
c
y
 
c
a
n
 
s
p
i
k
e
 
d
u
r
i
n
g
 
b
u
r
s
t
s
.
"
,


 
 
 
 
e
x
:
 
"
N
e
t
w
o
r
k
 
s
h
a
p
i
n
g
,
 
a
n
y
t
h
i
n
g
 
w
h
e
r
e
 
d
o
w
n
s
t
r
e
a
m
 
M
U
S
T
 
n
o
t
 
s
e
e
 
b
u
r
s
t
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
S
l
i
d
i
n
g
 
W
i
n
d
o
w
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
s
h
o
r
t
:
 
"
h
o
n
e
s
t
 
c
o
u
n
t
"
,


 
 
 
 
l
o
n
g
:
 
"
C
o
u
n
t
 
r
e
q
u
e
s
t
s
 
i
n
 
t
h
e
 
l
a
s
t
 
T
 
s
e
c
o
n
d
s
.
 
I
f
 
c
o
u
n
t
 
>
 
l
i
m
i
t
,
 
r
e
j
e
c
t
.
 
W
i
n
d
o
w
 
s
l
i
d
e
s
 
c
o
n
t
i
n
u
o
u
s
l
y
.
"
,


 
 
 
 
p
r
o
:
 
"
M
o
s
t
 
a
c
c
u
r
a
t
e
 
e
n
f
o
r
c
e
m
e
n
t
 
o
f
 
'
X
 
r
e
q
/
m
i
n
'
 
S
L
A
.
"
,


 
 
 
 
c
o
n
:
 
"
H
i
g
h
e
r
 
m
e
m
o
r
y
 
c
o
s
t
 
(
p
e
r
-
u
s
e
r
 
r
e
q
u
e
s
t
 
l
o
g
)
 
a
n
d
 
C
P
U
 
p
e
r
 
c
h
e
c
k
.
"
,


 
 
 
 
e
x
:
 
"
G
i
t
H
u
b
 
A
P
I
 
l
i
m
i
t
s
,
 
T
w
i
t
t
e
r
 
A
P
I
 
l
i
m
i
t
s
.
"
,


 
 
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
 
D
e
f
i
n
i
t
i
o
n
(
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
T
h
r
e
e
 
a
l
g
o
r
i
t
h
m
s
.
 
O
n
e
 
j
o
b
:
 
c
a
p
 
t
r
a
f
f
i
c
 
p
e
r
 
i
d
e
n
t
i
t
y
.
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
a
t
e
 
l
i
m
i
t
e
r
s
 
p
r
o
t
e
c
t
 
d
o
w
n
s
t
r
e
a
m
 
s
e
r
v
i
c
e
s
 
f
r
o
m
 
b
e
i
n
g
 
o
v
e
r
w
h
e
l
m
e
d
 
a
n
d
 
p
r
o
t
e
c
t
 
A
P
I
s
 
f
r
o
m


 
 
 
 
 
 
 
 
a
b
u
s
i
v
e
 
c
l
i
e
n
t
s
.
 
T
h
e
 
a
l
g
o
r
i
t
h
m
 
y
o
u
 
p
i
c
k
 
d
e
c
i
d
e
s
 
h
o
w
 
b
u
r
s
t
s
 
b
e
h
a
v
e
:
 
a
l
l
o
w
e
d
,
 
s
m
o
o
t
h
e
d
,
 
o
r


 
 
 
 
 
 
 
 
s
t
r
i
c
t
l
y
 
c
a
p
p
e
d
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
3
 
g
a
p
-
3
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
A
L
G
O
S
.
m
a
p
(
(
a
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
a
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
,
 
v
i
s
i
b
l
e
:
 
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
6
p
x
 
1
8
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
.
c
o
l
o
r
}
5
5
`
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
 
`
$
{
a
.
c
o
l
o
r
}
0
8
`
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
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
r
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
 
4
 
}
}
>
{
a
.
n
a
m
e
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
 
a
.
c
o
l
o
r
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
s
h
o
r
t
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
4
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
a
.
l
o
n
g
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
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
T
o
p
:
 
8
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
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
a
.
c
o
l
o
r
}
3
3
`
 
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
S
i
z
e
:
 
"
0
.
7
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
 
6
 
}
}
>
P
R
O
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
p
r
o
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
 
W
A
R
N
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
 
6
 
}
}
>
C
O
N
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
c
o
n
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
 
a
.
c
o
l
o
r
 
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
 
4
 
}
}
>
E
X
 
·
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
 
}
}
>
{
a
.
e
x
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
)
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


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
S
t
r
i
p
e
<
/
b
>
 
u
s
e
s
 
t
o
k
e
n
 
b
u
c
k
e
t
 
p
e
r
 
A
P
I
 
k
e
y
.
 
<
b
>
C
l
o
u
d
f
l
a
r
e
<
/
b
>
 
u
s
e
s
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
f
o
r


 
 
 
 
 
 
 
 
 
 
D
D
o
S
 
d
e
t
e
c
t
i
o
n
.
 
<
b
>
n
g
i
n
x
<
/
b
>
 
s
h
i
p
s
 
a
 
l
e
a
k
y
-
b
u
c
k
e
t
 
s
h
a
p
e
r
 
o
u
t
 
o
f
 
t
h
e
 
b
o
x
.
 
<
b
>
R
e
d
i
s
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
+
 
a
 
L
u
a
 
s
c
r
i
p
t
 
i
s
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
d
i
s
t
r
i
b
u
t
e
d
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
,
 
a
t
o
m
i
c
 
a
c
r
o
s
s
 
n
o
d
e
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
 
T
h
r
e
e
 
a
l
g
o
r
i
t
h
m
s
 
r
u
n
n
i
n
g
 
s
i
d
e
-
b
y
-
s
i
d
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
q
u
e
s
t
E
v
e
n
t
 
{


 
 
t
:
 
n
u
m
b
e
r
;
 
/
/
 
m
s
 
s
i
n
c
e
 
s
t
a
r
t


 
 
a
l
g
o
:
 
"
t
o
k
e
n
"
 
|
 
"
l
e
a
k
y
"
 
|
 
"
s
l
i
d
i
n
g
"
;


 
 
r
e
s
u
l
t
:
 
"
a
l
l
o
w
e
d
"
 
|
 
"
r
e
j
e
c
t
e
d
"
 
|
 
"
q
u
e
u
e
d
"
;


}




c
o
n
s
t
 
T
I
C
K
_
M
S
 
=
 
1
0
0
;


c
o
n
s
t
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
 
=
 
1
2
0
0
0
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
 
S
i
m
R
e
s
u
l
t
 
{


 
 
e
v
e
n
t
s
:
 
R
e
q
u
e
s
t
E
v
e
n
t
[
]
;


 
 
t
o
k
e
n
S
a
m
p
l
e
s
:
 
{
 
t
:
 
n
u
m
b
e
r
;
 
t
o
k
e
n
s
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
l
e
a
k
y
S
a
m
p
l
e
s
:
 
{
 
t
:
 
n
u
m
b
e
r
;
 
q
u
e
u
e
d
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
s
l
i
d
i
n
g
S
a
m
p
l
e
s
:
 
{
 
t
:
 
n
u
m
b
e
r
;
 
c
o
u
n
t
:
 
n
u
m
b
e
r
 
}
[
]
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
 
s
i
m
u
l
a
t
e
(
b
u
r
s
t
:
 
n
u
m
b
e
r
)
:
 
S
i
m
R
e
s
u
l
t
 
{


 
 
/
/
 
B
u
r
s
t
 
p
a
t
t
e
r
n
:
 
8
 
r
e
q
/
s
 
b
a
s
e
l
i
n
e
,
 
t
h
e
n
 
a
 
s
p
i
k
e
 
o
f
 
`
b
u
r
s
t
`
 
r
e
q
/
s
 
f
o
r
 
2
s
,
 
t
h
e
n
 
b
a
c
k
 
t
o
 
8
.


 
 
c
o
n
s
t
 
e
v
e
n
t
s
:
 
R
e
q
u
e
s
t
E
v
e
n
t
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
t
o
k
e
n
S
a
m
p
l
e
s
:
 
{
 
t
:
 
n
u
m
b
e
r
;
 
t
o
k
e
n
s
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
l
e
a
k
y
S
a
m
p
l
e
s
:
 
{
 
t
:
 
n
u
m
b
e
r
;
 
q
u
e
u
e
d
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
l
i
d
i
n
g
S
a
m
p
l
e
s
:
 
{
 
t
:
 
n
u
m
b
e
r
;
 
c
o
u
n
t
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;




 
 
/
/
 
T
o
k
e
n
 
b
u
c
k
e
t
 
p
a
r
a
m
s
:
 
c
a
p
=
1
0
,
 
r
e
f
i
l
l
=
1
0
/
s


 
 
l
e
t
 
t
o
k
e
n
s
 
=
 
1
0
;


 
 
c
o
n
s
t
 
t
o
k
e
n
C
a
p
 
=
 
1
0
;


 
 
c
o
n
s
t
 
t
o
k
e
n
R
e
f
i
l
l
P
e
r
M
s
 
=
 
1
0
 
/
 
1
0
0
0
;




 
 
/
/
 
L
e
a
k
y
 
b
u
c
k
e
t
:
 
c
a
p
=
2
0
,
 
l
e
a
k
=
1
0
/
s


 
 
l
e
t
 
q
u
e
u
e
 
=
 
0
;


 
 
c
o
n
s
t
 
l
e
a
k
y
C
a
p
 
=
 
2
0
;


 
 
c
o
n
s
t
 
l
e
a
k
P
e
r
M
s
 
=
 
1
0
 
/
 
1
0
0
0
;




 
 
/
/
 
S
l
i
d
i
n
g
 
w
i
n
d
o
w
:
 
1
0
 
r
e
q
/
s
 
=
 
1
0
 
i
n
 
l
a
s
t
 
1
0
0
0
m
s


 
 
c
o
n
s
t
 
s
l
i
d
i
n
g
H
i
s
t
o
r
y
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
l
i
d
i
n
g
L
i
m
i
t
 
=
 
1
0
;


 
 
c
o
n
s
t
 
s
l
i
d
i
n
g
W
i
n
d
o
w
 
=
 
1
0
0
0
;




 
 
l
e
t
 
l
a
s
t
R
e
q
 
=
 
0
;


 
 
f
o
r
 
(
l
e
t
 
t
 
=
 
0
;
 
t
 
<
=
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
;
 
t
 
+
=
 
T
I
C
K
_
M
S
)
 
{


 
 
 
 
/
/
 
R
e
f
i
l
l
 
/
 
l
e
a
k
 
b
e
t
w
e
e
n
 
t
i
c
k
s


 
 
 
 
t
o
k
e
n
s
 
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
t
o
k
e
n
C
a
p
,
 
t
o
k
e
n
s
 
+
 
t
o
k
e
n
R
e
f
i
l
l
P
e
r
M
s
 
*
 
T
I
C
K
_
M
S
)
;


 
 
 
 
q
u
e
u
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
 
q
u
e
u
e
 
-
 
l
e
a
k
P
e
r
M
s
 
*
 
T
I
C
K
_
M
S
)
;




 
 
 
 
/
/
 
D
e
c
i
d
e
 
r
a
t
e
 
a
t
 
t
h
i
s
 
m
o
m
e
n
t


 
 
 
 
c
o
n
s
t
 
i
n
S
p
i
k
e
 
=
 
t
 
>
=
 
4
0
0
0
 
&
&
 
t
 
<
=
 
6
0
0
0
;


 
 
 
 
c
o
n
s
t
 
r
e
q
P
e
r
S
e
c
 
=
 
i
n
S
p
i
k
e
 
?
 
b
u
r
s
t
 
:
 
8
;


 
 
 
 
c
o
n
s
t
 
i
n
t
e
r
v
a
l
 
=
 
1
0
0
0
 
/
 
r
e
q
P
e
r
S
e
c
;




 
 
 
 
w
h
i
l
e
 
(
l
a
s
t
R
e
q
 
+
 
i
n
t
e
r
v
a
l
 
<
=
 
t
)
 
{


 
 
 
 
 
 
l
a
s
t
R
e
q
 
+
=
 
i
n
t
e
r
v
a
l
;




 
 
 
 
 
 
/
/
 
T
o
k
e
n
 
b
u
c
k
e
t


 
 
 
 
 
 
i
f
 
(
t
o
k
e
n
s
 
>
=
 
1
)
 
{


 
 
 
 
 
 
 
 
t
o
k
e
n
s
 
-
=
 
1
;


 
 
 
 
 
 
 
 
e
v
e
n
t
s
.
p
u
s
h
(
{
 
t
:
 
l
a
s
t
R
e
q
,
 
a
l
g
o
:
 
"
t
o
k
e
n
"
,
 
r
e
s
u
l
t
:
 
"
a
l
l
o
w
e
d
"
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
e
v
e
n
t
s
.
p
u
s
h
(
{
 
t
:
 
l
a
s
t
R
e
q
,
 
a
l
g
o
:
 
"
t
o
k
e
n
"
,
 
r
e
s
u
l
t
:
 
"
r
e
j
e
c
t
e
d
"
 
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
L
e
a
k
y
 
b
u
c
k
e
t


 
 
 
 
 
 
i
f
 
(
q
u
e
u
e
 
+
 
1
 
<
=
 
l
e
a
k
y
C
a
p
)
 
{


 
 
 
 
 
 
 
 
q
u
e
u
e
 
+
=
 
1
;


 
 
 
 
 
 
 
 
e
v
e
n
t
s
.
p
u
s
h
(
{
 
t
:
 
l
a
s
t
R
e
q
,
 
a
l
g
o
:
 
"
l
e
a
k
y
"
,
 
r
e
s
u
l
t
:
 
"
q
u
e
u
e
d
"
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
e
v
e
n
t
s
.
p
u
s
h
(
{
 
t
:
 
l
a
s
t
R
e
q
,
 
a
l
g
o
:
 
"
l
e
a
k
y
"
,
 
r
e
s
u
l
t
:
 
"
r
e
j
e
c
t
e
d
"
 
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
S
l
i
d
i
n
g
 
w
i
n
d
o
w


 
 
 
 
 
 
/
/
 
p
r
u
n
e


 
 
 
 
 
 
w
h
i
l
e
 
(
s
l
i
d
i
n
g
H
i
s
t
o
r
y
.
l
e
n
g
t
h
 
&
&
 
s
l
i
d
i
n
g
H
i
s
t
o
r
y
[
0
]
 
<
 
l
a
s
t
R
e
q
 
-
 
s
l
i
d
i
n
g
W
i
n
d
o
w
)
 
{


 
 
 
 
 
 
 
 
s
l
i
d
i
n
g
H
i
s
t
o
r
y
.
s
h
i
f
t
(
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
s
l
i
d
i
n
g
H
i
s
t
o
r
y
.
l
e
n
g
t
h
 
<
 
s
l
i
d
i
n
g
L
i
m
i
t
)
 
{


 
 
 
 
 
 
 
 
s
l
i
d
i
n
g
H
i
s
t
o
r
y
.
p
u
s
h
(
l
a
s
t
R
e
q
)
;


 
 
 
 
 
 
 
 
e
v
e
n
t
s
.
p
u
s
h
(
{
 
t
:
 
l
a
s
t
R
e
q
,
 
a
l
g
o
:
 
"
s
l
i
d
i
n
g
"
,
 
r
e
s
u
l
t
:
 
"
a
l
l
o
w
e
d
"
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
e
v
e
n
t
s
.
p
u
s
h
(
{
 
t
:
 
l
a
s
t
R
e
q
,
 
a
l
g
o
:
 
"
s
l
i
d
i
n
g
"
,
 
r
e
s
u
l
t
:
 
"
r
e
j
e
c
t
e
d
"
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
t
o
k
e
n
S
a
m
p
l
e
s
.
p
u
s
h
(
{
 
t
,
 
t
o
k
e
n
s
 
}
)
;


 
 
 
 
l
e
a
k
y
S
a
m
p
l
e
s
.
p
u
s
h
(
{
 
t
,
 
q
u
e
u
e
d
:
 
q
u
e
u
e
 
}
)
;


 
 
 
 
s
l
i
d
i
n
g
S
a
m
p
l
e
s
.
p
u
s
h
(
{
 
t
,
 
c
o
u
n
t
:
 
s
l
i
d
i
n
g
H
i
s
t
o
r
y
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
x
 
>
=
 
t
 
-
 
s
l
i
d
i
n
g
W
i
n
d
o
w
)
.
l
e
n
g
t
h
 
}
)
;


 
 
}




 
 
r
e
t
u
r
n
 
{
 
e
v
e
n
t
s
,
 
t
o
k
e
n
S
a
m
p
l
e
s
,
 
l
e
a
k
y
S
a
m
p
l
e
s
,
 
s
l
i
d
i
n
g
S
a
m
p
l
e
s
 
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
 
T
h
r
e
e
A
l
g
o
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
b
u
r
s
t
,
 
s
e
t
B
u
r
s
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
4
0
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
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
t
N
o
w
,
 
s
e
t
T
N
o
w
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
 
s
i
m
 
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
 
s
i
m
u
l
a
t
e
(
b
u
r
s
t
)
,
 
[
b
u
r
s
t
]
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
r
u
n
n
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


 
 
 
 
 
 
s
e
t
T
N
o
w
(
(
t
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
 
t
 
+
 
1
0
0
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
 
>
=
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
R
u
n
n
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


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
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
 
1
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
r
u
n
n
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
T
N
o
w
(
0
)
;


 
 
 
 
s
e
t
R
u
n
n
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
;




 
 
/
/
 
S
t
a
t
s
 
u
p
 
t
o
 
t
N
o
w


 
 
c
o
n
s
t
 
u
p
T
o
 
=
 
s
i
m
.
e
v
e
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
e
)
 
=
>
 
e
.
t
 
<
=
 
t
N
o
w
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
t
s
 
=
 
{


 
 
 
 
t
o
k
e
n
:
 
{
 
a
l
l
o
w
e
d
:
 
u
p
T
o
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
e
.
a
l
g
o
 
=
=
=
 
"
t
o
k
e
n
"
 
&
&
 
e
.
r
e
s
u
l
t
 
=
=
=
 
"
a
l
l
o
w
e
d
"
)
.
l
e
n
g
t
h
,
 
r
e
j
e
c
t
e
d
:
 
u
p
T
o
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
e
.
a
l
g
o
 
=
=
=
 
"
t
o
k
e
n
"
 
&
&
 
e
.
r
e
s
u
l
t
 
=
=
=
 
"
r
e
j
e
c
t
e
d
"
)
.
l
e
n
g
t
h
 
}
,


 
 
 
 
l
e
a
k
y
:
 
{
 
a
l
l
o
w
e
d
:
 
u
p
T
o
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
e
.
a
l
g
o
 
=
=
=
 
"
l
e
a
k
y
"
 
&
&
 
e
.
r
e
s
u
l
t
 
=
=
=
 
"
q
u
e
u
e
d
"
)
.
l
e
n
g
t
h
,
 
r
e
j
e
c
t
e
d
:
 
u
p
T
o
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
e
.
a
l
g
o
 
=
=
=
 
"
l
e
a
k
y
"
 
&
&
 
e
.
r
e
s
u
l
t
 
=
=
=
 
"
r
e
j
e
c
t
e
d
"
)
.
l
e
n
g
t
h
 
}
,


 
 
 
 
s
l
i
d
i
n
g
:
 
{
 
a
l
l
o
w
e
d
:
 
u
p
T
o
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
e
.
a
l
g
o
 
=
=
=
 
"
s
l
i
d
i
n
g
"
 
&
&
 
e
.
r
e
s
u
l
t
 
=
=
=
 
"
a
l
l
o
w
e
d
"
)
.
l
e
n
g
t
h
,
 
r
e
j
e
c
t
e
d
:
 
u
p
T
o
.
f
i
l
t
e
r
(
(
e
)
 
=
>
 
e
.
a
l
g
o
 
=
=
=
 
"
s
l
i
d
i
n
g
"
 
&
&
 
e
.
r
e
s
u
l
t
 
=
=
=
 
"
r
e
j
e
c
t
e
d
"
)
.
l
e
n
g
t
h
 
}
,


 
 
}
;




 
 
c
o
n
s
t
 
t
o
k
e
n
S
a
m
p
l
e
A
t
T
 
=
 
s
i
m
.
t
o
k
e
n
S
a
m
p
l
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
t
 
>
=
 
t
N
o
w
)
 
?
?
 
s
i
m
.
t
o
k
e
n
S
a
m
p
l
e
s
[
s
i
m
.
t
o
k
e
n
S
a
m
p
l
e
s
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
c
o
n
s
t
 
l
e
a
k
y
S
a
m
p
l
e
A
t
T
 
=
 
s
i
m
.
l
e
a
k
y
S
a
m
p
l
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
t
 
>
=
 
t
N
o
w
)
 
?
?
 
s
i
m
.
l
e
a
k
y
S
a
m
p
l
e
s
[
s
i
m
.
l
e
a
k
y
S
a
m
p
l
e
s
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
c
o
n
s
t
 
s
l
i
d
i
n
g
S
a
m
p
l
e
A
t
T
 
=
 
s
i
m
.
s
l
i
d
i
n
g
S
a
m
p
l
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
t
 
>
=
 
t
N
o
w
)
 
?
?
 
s
i
m
.
s
l
i
d
i
n
g
S
a
m
p
l
e
s
[
s
i
m
.
s
l
i
d
i
n
g
S
a
m
p
l
e
s
.
l
e
n
g
t
h
 
-
 
1
]
;




 
 
c
o
n
s
t
 
i
n
S
p
i
k
e
 
=
 
t
N
o
w
 
>
=
 
4
0
0
0
 
&
&
 
t
N
o
w
 
<
=
 
6
0
0
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
S
a
m
e
 
b
u
r
s
t
.
 
T
h
r
e
e
 
a
l
g
o
r
i
t
h
m
s
 
r
e
a
c
t
.
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


 
 
 
 
 
 
 
 
A
l
l
 
t
h
r
e
e
 
a
r
e
 
c
o
n
f
i
g
u
r
e
d
 
f
o
r
 
1
0
 
r
e
q
/
s
.
 
S
t
e
a
d
y
 
t
r
a
f
f
i
c
 
a
t
 
8
 
r
e
q
/
s
,
 
t
h
e
n
 
a
 
s
p
i
k
e
 
a
t
 
<
b
>
{
b
u
r
s
t
}
 
r
e
q
/
s
<
/
b
>
 
f
r
o
m


 
 
 
 
 
 
 
 
t
=
4
s
 
t
o
 
t
=
6
s
.
 
P
r
e
s
s
 
p
l
a
y
.
 
W
a
t
c
h
 
t
h
e
 
b
u
c
k
e
t
 
l
e
v
e
l
,
 
q
u
e
u
e
,
 
a
n
d
 
r
o
l
l
i
n
g
 
c
o
u
n
t
 
d
i
v
e
r
g
e
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
3
 
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
 
}
}
>
b
u
r
s
t
 
r
a
t
e
:
<
/
s
p
a
n
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
r
a
n
g
e
"


 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
2
0
}


 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
8
0
}


 
 
 
 
 
 
 
 
 
 
s
t
e
p
=
{
1
0
}


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
b
u
r
s
t
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
 
{
 
s
e
t
B
u
r
s
t
(
N
u
m
b
e
r
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
)
;
 
s
e
t
T
N
o
w
(
0
)
;
 
s
e
t
R
u
n
n
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
r
u
n
n
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
 
a
c
c
e
n
t
C
o
l
o
r
:
 
S
D
,
 
f
l
e
x
:
 
1
,
 
m
a
x
W
i
d
t
h
:
 
2
4
0
 
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
 
S
D
 
}
}
>
{
b
u
r
s
t
}
 
r
e
q
/
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


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
T
i
m
e
l
i
n
e
 
*
/
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
 
h
e
i
g
h
t
:
 
2
4
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
 
1
4
 
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
 
i
n
s
e
t
:
 
0
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
 
4
 
}
}
 
/
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
t
t
o
m
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
`
$
{
(
4
0
0
0
 
/
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
)
 
*
 
1
0
0
}
%
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
`
$
{
(
(
6
0
0
0
 
-
 
4
0
0
0
)
 
/
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
)
 
*
 
1
0
0
}
%
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
 
`
$
{
W
A
R
N
}
3
3
`
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
W
A
R
N
}
5
5
`
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


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
l
e
f
t
:
 
`
$
{
(
t
N
o
w
 
/
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
)
 
*
 
1
0
0
}
%
`
 
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
 
b
o
t
t
o
m
:
 
0
,
 
w
i
d
t
h
:
 
2
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
 
S
D
 
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
 
l
e
f
t
:
 
`
$
{
(
4
0
0
0
 
/
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
)
 
*
 
1
0
0
}
%
`
,
 
t
o
p
:
 
-
1
8
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
6
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
 
W
A
R
N
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
b
u
r
s
t


 
 
 
 
 
 
 
 
 
 
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
 
T
h
r
e
e
 
l
a
n
e
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
L
a
n
e


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
=
"
T
o
k
e
n
 
B
u
c
k
e
t
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


 
 
 
 
 
 
 
 
 
 
 
 
m
e
t
r
i
c
=
{
`
t
o
k
e
n
s
:
 
$
{
(
t
o
k
e
n
S
a
m
p
l
e
A
t
T
?
.
t
o
k
e
n
s
 
?
?
 
0
)
.
t
o
F
i
x
e
d
(
1
)
}
 
/
 
1
0
`
}


 
 
 
 
 
 
 
 
 
 
 
 
b
a
r
P
c
t
=
{
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
 
(
(
t
o
k
e
n
S
a
m
p
l
e
A
t
T
?
.
t
o
k
e
n
s
 
?
?
 
0
)
 
/
 
1
0
)
 
*
 
1
0
0
)
}


 
 
 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
=
{
s
t
a
t
s
.
t
o
k
e
n
.
a
l
l
o
w
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
j
e
c
t
e
d
=
{
s
t
a
t
s
.
t
o
k
e
n
.
r
e
j
e
c
t
e
d
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
L
a
n
e


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
=
"
L
e
a
k
y
 
B
u
c
k
e
t
"


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
P
U
R
P
L
E
}


 
 
 
 
 
 
 
 
 
 
 
 
m
e
t
r
i
c
=
{
`
q
u
e
u
e
d
:
 
$
{
(
l
e
a
k
y
S
a
m
p
l
e
A
t
T
?
.
q
u
e
u
e
d
 
?
?
 
0
)
.
t
o
F
i
x
e
d
(
1
)
}
 
/
 
2
0
`
}


 
 
 
 
 
 
 
 
 
 
 
 
b
a
r
P
c
t
=
{
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
 
(
(
l
e
a
k
y
S
a
m
p
l
e
A
t
T
?
.
q
u
e
u
e
d
 
?
?
 
0
)
 
/
 
2
0
)
 
*
 
1
0
0
)
}


 
 
 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
=
{
s
t
a
t
s
.
l
e
a
k
y
.
a
l
l
o
w
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
j
e
c
t
e
d
=
{
s
t
a
t
s
.
l
e
a
k
y
.
r
e
j
e
c
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
b
a
r
I
s
B
a
c
k
p
r
e
s
s
u
r
e


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
L
a
n
e


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
=
"
S
l
i
d
i
n
g
 
W
i
n
d
o
w
"


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
W
A
R
N
}


 
 
 
 
 
 
 
 
 
 
 
 
m
e
t
r
i
c
=
{
`
l
a
s
t
 
1
s
:
 
$
{
s
l
i
d
i
n
g
S
a
m
p
l
e
A
t
T
?
.
c
o
u
n
t
 
?
?
 
0
}
 
/
 
1
0
`
}


 
 
 
 
 
 
 
 
 
 
 
 
b
a
r
P
c
t
=
{
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
 
(
(
s
l
i
d
i
n
g
S
a
m
p
l
e
A
t
T
?
.
c
o
u
n
t
 
?
?
 
0
)
 
/
 
1
0
)
 
*
 
1
0
0
)
}


 
 
 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
=
{
s
t
a
t
s
.
s
l
i
d
i
n
g
.
a
l
l
o
w
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
j
e
c
t
e
d
=
{
s
t
a
t
s
.
s
l
i
d
i
n
g
.
r
e
j
e
c
t
e
d
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
 
s
e
t
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
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
r
u
n
n
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
 
t
N
o
w
 
>
=
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
 
?
 
"
r
e
p
l
a
y
"
 
:
 
t
N
o
w
 
>
 
0
 
?
 
"
r
e
s
u
m
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
b
t
n
(
N
E
U
T
R
A
L
)
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
t
 
=
 
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
 
i
n
S
p
i
k
e
 
?
 
W
A
R
N
 
:
 
S
D
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
 
}
}
>
{
(
t
N
o
w
 
/
 
1
0
0
0
)
.
t
o
F
i
x
e
d
(
1
)
}
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
/
 
1
2
.
0
s
"
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




 
 
 
 
 
 
 
 
{
t
N
o
w
 
>
=
 
S
I
M
_
D
U
R
A
T
I
O
N
_
M
S
 
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
4
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
U
M
M
A
R
Y


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
T
o
k
e
n
 
b
u
c
k
e
t
:
 
{
s
t
a
t
s
.
t
o
k
e
n
.
a
l
l
o
w
e
d
}
 
a
l
l
o
w
e
d
,
 
{
s
t
a
t
s
.
t
o
k
e
n
.
r
e
j
e
c
t
e
d
}
 
r
e
j
e
c
t
e
d
 
(
a
l
l
o
w
e
d
 
t
h
e
 
b
u
r
s
t
 
u
n
t
i
l
 
t
o
k
e
n
s
 
d
r
a
i
n
e
d
,
 
t
h
e
n
 
s
t
r
i
c
t
)
.


 
 
 
 
 
 
 
 
 
 
 
 
L
e
a
k
y
 
b
u
c
k
e
t
:
 
{
s
t
a
t
s
.
l
e
a
k
y
.
a
l
l
o
w
e
d
}
 
q
u
e
u
e
d
,
 
{
s
t
a
t
s
.
l
e
a
k
y
.
r
e
j
e
c
t
e
d
}
 
d
r
o
p
p
e
d
 
(
s
m
o
o
t
h
 
o
u
t
p
u
t
 
r
a
t
e
,
 
b
a
c
k
p
r
e
s
s
u
r
e
 
o
n
 
b
u
r
s
t
)
.


 
 
 
 
 
 
 
 
 
 
 
 
S
l
i
d
i
n
g
:
 
{
s
t
a
t
s
.
s
l
i
d
i
n
g
.
a
l
l
o
w
e
d
}
 
a
l
l
o
w
e
d
,
 
{
s
t
a
t
s
.
s
l
i
d
i
n
g
.
r
e
j
e
c
t
e
d
}
 
r
e
j
e
c
t
e
d
 
(
c
l
e
a
n
e
s
t
 
c
a
p
;
 
r
e
j
e
c
t
s
 
b
u
r
s
t
 
o
v
e
r
f
l
o
w
 
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
)
.


 
 
 
 
 
 
 
 
 
 
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
 
L
a
n
e
(
{
 
n
a
m
e
,
 
c
o
l
o
r
,
 
m
e
t
r
i
c
,
 
b
a
r
P
c
t
,
 
a
l
l
o
w
e
d
,
 
r
e
j
e
c
t
e
d
,
 
b
a
r
I
s
B
a
c
k
p
r
e
s
s
u
r
e
 
}
:
 
{
 
n
a
m
e
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
 
m
e
t
r
i
c
:
 
s
t
r
i
n
g
;
 
b
a
r
P
c
t
:
 
n
u
m
b
e
r
;
 
a
l
l
o
w
e
d
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
j
e
c
t
e
d
:
 
n
u
m
b
e
r
;
 
b
a
r
I
s
B
a
c
k
p
r
e
s
s
u
r
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
c
o
l
o
r
}
3
3
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
 
`
$
{
c
o
l
o
r
}
0
8
`
 
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
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
8
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
 
c
o
l
o
r
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
n
a
m
e
}


 
 
 
 
 
 
 
 
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
m
e
t
r
i
c
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
 
s
t
y
l
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
 
1
4
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
 
w
i
d
t
h
:
 
`
$
{
b
a
r
P
c
t
}
%
`
 
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


 
 
 
 
 
 
 
 
 
 
s
t
y
l
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
1
0
0
%
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
 
b
a
r
I
s
B
a
c
k
p
r
e
s
s
u
r
e
 
?
 
`
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
9
0
d
e
g
,
 
$
{
c
o
l
o
r
}
,
 
$
{
W
A
R
N
}
)
`
 
:
 
c
o
l
o
r
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
.
9
 
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
f
l
e
x
"
,
 
g
a
p
:
 
1
4
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
 
c
o
l
o
r
:
 
S
D
 
}
}
>
✓
 
{
a
l
l
o
w
e
d
}
 
a
l
l
o
w
e
d
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
 
W
A
R
N
 
}
}
>
✕
 
{
r
e
j
e
c
t
e
d
}
 
r
e
j
e
c
t
e
d
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
 
b
t
n
(
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
)
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
 
{


 
 
r
e
t
u
r
n
 
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
c
o
l
o
r
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
 
`
$
{
c
o
l
o
r
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
 
W
h
e
r
e
 
t
o
 
p
u
t
 
r
a
t
e
 
l
i
m
i
t
e
r
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




c
o
n
s
t
 
P
L
A
C
E
M
E
N
T
S
 
=
 
[


 
 
{


 
 
 
 
w
h
e
r
e
:
 
"
E
d
g
e
 
/
 
C
D
N
"
,


 
 
 
 
p
i
c
k
:
 
"
F
i
r
s
t
 
l
i
n
e
 
o
f
 
d
e
f
e
n
s
e
"
,


 
 
 
 
e
x
:
 
"
C
l
o
u
d
f
l
a
r
e
 
r
a
t
e
-
l
i
m
i
t
 
r
u
l
e
s
.
 
D
r
o
p
s
 
b
o
t
s
 
b
e
f
o
r
e
 
t
h
e
y
 
h
i
t
 
y
o
u
r
 
o
r
i
g
i
n
.
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
r
e
:
 
"
A
P
I
 
G
a
t
e
w
a
y
"
,


 
 
 
 
p
i
c
k
:
 
"
P
e
r
-
A
P
I
-
k
e
y
,
 
p
e
r
-
r
o
u
t
e
"
,


 
 
 
 
e
x
:
 
"
A
W
S
 
A
P
I
 
G
a
t
e
w
a
y
 
t
h
r
o
t
t
l
i
n
g
,
 
K
o
n
g
,
 
T
y
k
.
 
W
h
e
r
e
 
S
a
a
S
 
p
l
a
n
s
 
g
e
t
 
e
n
f
o
r
c
e
d
.
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
r
e
:
 
"
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
 
m
i
d
d
l
e
w
a
r
e
"
,


 
 
 
 
p
i
c
k
:
 
"
P
e
r
-
u
s
e
r
,
 
p
e
r
-
a
c
t
i
o
n
"
,


 
 
 
 
e
x
:
 
"
E
x
p
r
e
s
s
 
m
i
d
d
l
e
w
a
r
e
 
+
 
R
e
d
i
s
.
 
P
e
r
-
u
s
e
r
 
l
o
g
i
n
 
a
t
t
e
m
p
t
s
,
 
p
e
r
-
I
P
 
s
i
g
n
u
p
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
r
e
:
 
"
P
e
r
-
s
e
r
v
i
c
e
"
,


 
 
 
 
p
i
c
k
:
 
"
L
a
s
t
 
l
i
n
e
 
o
f
 
d
e
f
e
n
s
e
"
,


 
 
 
 
e
x
:
 
"
I
n
t
e
r
n
a
l
 
R
P
C
s
 
t
h
a
t
 
p
r
o
t
e
c
t
 
a
 
f
r
a
g
i
l
e
 
d
o
w
n
s
t
r
e
a
m
 
(
l
e
g
a
c
y
 
D
B
,
 
t
h
i
r
d
-
p
a
r
t
y
 
A
P
I
)
.
"
,


 
 
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
 
P
l
a
c
e
m
e
n
t
(
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
 
y
o
u
 
a
c
t
u
a
l
l
y
 
p
u
t
 
a
 
r
a
t
e
 
l
i
m
i
t
e
r
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
e
a
l
 
s
y
s
t
e
m
s
 
u
s
e
 
r
a
t
e
 
l
i
m
i
t
e
r
s
 
a
t
 
m
u
l
t
i
p
l
e
 
l
a
y
e
r
s
 
—
 
d
e
f
e
n
s
e
 
i
n
 
d
e
p
t
h
.
 
E
a
c
h
 
l
a
y
e
r
 
p
r
o
t
e
c
t
s


 
 
 
 
 
 
 
 
d
i
f
f
e
r
e
n
t
 
t
h
i
n
g
s
 
a
n
d
 
u
s
e
s
 
d
i
f
f
e
r
e
n
t
 
i
d
e
n
t
i
t
y
 
(
I
P
,
 
A
P
I
 
k
e
y
,
 
u
s
e
r
,
 
r
o
u
t
e
)
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
 
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
3
 
m
b
-
5
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
P
L
A
C
E
M
E
N
T
S
.
m
a
p
(
(
p
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
w
h
e
r
e
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
,
 
v
i
s
i
b
l
e
:
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
4
0
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
 
d
i
s
p
l
a
y
:
 
"
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
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
g
a
p
:
 
1
2
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
r
e
m
"
 
}
}
>
{
p
.
w
h
e
r
e
}
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
0
8
e
m
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
3
p
x
 
8
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
S
D
}
5
5
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
 
`
$
{
S
D
}
1
4
`
,
 
w
h
i
t
e
S
p
a
c
e
:
 
"
n
o
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
p
i
c
k
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
4
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
 
4
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
E
X
 
·
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
 
}
}
>
{
p
.
e
x
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
)
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
S
D
}
5
5
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
 
`
$
{
S
D
}
1
0
`
 
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


 
 
 
 
 
 
 
 
 
 
D
I
S
T
R
I
B
U
T
E
D
 
R
A
T
E
 
L
I
M
I
T
I
N
G


 
 
 
 
 
 
 
 
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
6
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
S
i
n
g
l
e
-
n
o
d
e
 
l
i
m
i
t
e
r
s
 
b
r
e
a
k
 
w
i
t
h
 
h
o
r
i
z
o
n
t
a
l
l
y
-
s
c
a
l
e
d
 
s
e
r
v
e
r
s
 
—
 
e
a
c
h
 
i
n
s
t
a
n
c
e
 
o
n
l
y
 
s
e
e
s


 
 
 
 
 
 
 
 
 
 
i
t
s
 
o
w
n
 
t
r
a
f
f
i
c
.
 
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
 
f
i
x
:
 
<
b
>
R
e
d
i
s
 
w
i
t
h
 
a
n
 
a
t
o
m
i
c
 
L
u
a
 
s
c
r
i
p
t
<
/
b
>
.
 
E
a
c
h
 
r
e
q
u
e
s
t


 
 
 
 
 
 
 
 
 
 
f
e
t
c
h
e
s
 
a
n
d
 
d
e
c
r
e
m
e
n
t
s
 
a
 
c
o
u
n
t
e
r
 
a
t
o
m
i
c
a
l
l
y
 
a
c
r
o
s
s
 
a
l
l
 
s
e
r
v
e
r
 
i
n
s
t
a
n
c
e
s
.
 
F
o
r
 
m
a
s
s
i
v
e


 
 
 
 
 
 
 
 
 
 
s
c
a
l
e
,
 
s
h
a
r
d
e
d
 
b
y
 
u
s
e
r
 
I
D
 
o
r
 
h
a
s
h
e
d
 
i
d
e
n
t
i
t
y
.


 
 
 
 
 
 
 
 
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
5
_
R
a
t
e
L
i
m
i
t
i
n
g
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
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
t
i
o
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
T
h
r
e
e
 
A
l
g
o
r
i
t
h
m
s
"
,
 
i
c
o
n
:
 
<
Z
a
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
T
h
r
e
e
A
l
g
o
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
w
h
e
r
e
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
h
e
r
e
 
t
o
 
P
u
t
 
I
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
P
l
a
c
e
m
e
n
t
 
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
n
 
A
P
I
 
h
a
s
 
a
 
'
h
u
m
a
n
-
f
r
i
e
n
d
l
y
'
 
u
s
a
g
e
 
p
a
t
t
e
r
n
:
 
b
u
r
s
t
s
 
o
f
 
5
-
1
0
 
r
e
q
u
e
s
t
s
 
w
h
e
n
 
a
 
u
s
e
r
 
o
p
e
n
s
 
t
h
e
 
a
p
p
,
 
t
h
e
n
 
i
d
l
e
.
 
W
h
i
c
h
 
a
l
g
o
r
i
t
h
m
 
f
i
t
s
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
L
e
a
k
y
 
b
u
c
k
e
t
 
—
 
m
u
s
t
 
s
m
o
o
t
h
 
o
u
t
p
u
t
"
,
 
"
T
o
k
e
n
 
b
u
c
k
e
t
 
—
 
a
l
l
o
w
s
 
b
u
r
s
t
s
 
w
h
e
n
 
b
u
c
k
e
t
 
i
s
 
f
u
l
l
"
,
 
"
S
t
r
i
c
t
 
p
e
r
-
s
e
c
o
n
d
 
c
a
p
"
,
 
"
N
o
 
l
i
m
i
t
e
r
"
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
T
o
k
e
n
 
b
u
c
k
e
t
 
l
e
t
s
 
t
h
e
 
u
s
e
r
 
b
u
r
n
 
d
o
w
n
 
a
c
c
u
m
u
l
a
t
e
d
 
t
o
k
e
n
s
 
d
u
r
i
n
g
 
a
 
b
u
r
s
t
,
 
t
h
e
n
 
r
e
f
i
l
l
 
w
h
i
l
e
 
i
d
l
e
.
 
M
a
t
c
h
e
s
 
h
u
m
a
n
-
d
r
i
v
e
n
 
U
I
 
t
r
a
f
f
i
c
 
n
a
t
u
r
a
l
l
y
.
 
L
e
a
k
y
 
b
u
c
k
e
t
 
w
o
u
l
d
 
q
u
e
u
e
 
o
r
 
d
r
o
p
 
t
h
e
 
b
u
r
s
t
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
Y
o
u
 
n
e
e
d
 
t
o
 
p
r
o
t
e
c
t
 
a
 
f
r
a
g
i
l
e
 
l
e
g
a
c
y
 
d
a
t
a
b
a
s
e
 
t
h
a
t
 
p
h
y
s
i
c
a
l
l
y
 
c
a
n
n
o
t
 
h
a
n
d
l
e
 
b
u
r
s
t
s
.
 
W
h
i
c
h
 
a
l
g
o
r
i
t
h
m
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
o
k
e
n
 
b
u
c
k
e
t
"
,
 
"
L
e
a
k
y
 
b
u
c
k
e
t
 
—
 
o
u
t
p
u
t
 
i
s
 
p
e
r
f
e
c
t
l
y
 
s
m
o
o
t
h
"
,
 
"
S
l
i
d
i
n
g
 
w
i
n
d
o
w
"
,
 
"
D
o
e
s
n
'
t
 
m
a
t
t
e
r
"
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
L
e
a
k
y
 
b
u
c
k
e
t
 
g
u
a
r
a
n
t
e
e
s
 
t
h
e
 
d
o
w
n
s
t
r
e
a
m
 
s
e
e
s
 
a
 
s
t
r
i
c
t
l
y
 
b
o
u
n
d
e
d
 
r
a
t
e
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
i
n
p
u
t
 
p
a
t
t
e
r
n
.
 
B
u
r
s
t
s
 
q
u
e
u
e
 
u
p
 
(
o
r
 
a
r
e
 
d
r
o
p
p
e
d
)
,
 
b
u
t
 
t
h
e
 
d
a
t
a
b
a
s
e
'
s
 
v
i
e
w
 
i
s
 
u
n
i
f
o
r
m
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
Y
o
u
r
 
r
a
t
e
 
l
i
m
i
t
e
r
 
r
u
n
s
 
i
n
 
a
 
s
i
n
g
l
e
 
N
o
d
e
.
j
s
 
i
n
s
t
a
n
c
e
.
 
Y
o
u
 
s
c
a
l
e
 
t
o
 
4
 
i
n
s
t
a
n
c
e
s
.
 
W
h
a
t
 
b
r
e
a
k
s
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
N
o
t
h
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
i
n
s
t
a
n
c
e
 
o
n
l
y
 
s
e
e
s
 
i
t
s
 
o
w
n
 
t
r
a
f
f
i
c
,
 
s
o
 
t
h
e
 
e
f
f
e
c
t
i
v
e
 
l
i
m
i
t
 
b
e
c
o
m
e
s
 
4
×
 
t
h
e
 
c
o
n
f
i
g
u
r
e
d
 
l
i
m
i
t
.
"
,


 
 
 
 
 
 
 
 
"
M
e
m
o
r
y
 
u
s
a
g
e
 
d
r
o
p
s
.
"
,


 
 
 
 
 
 
 
 
"
L
a
t
e
n
c
y
 
i
m
p
r
o
v
e
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
P
e
r
-
i
n
s
t
a
n
c
e
 
l
i
m
i
t
e
r
s
 
b
e
c
o
m
e
 
p
e
r
-
i
n
s
t
a
n
c
e
 
s
i
l
o
s
.
 
T
h
e
 
f
i
x
 
i
s
 
s
h
a
r
e
d
 
s
t
a
t
e
 
—
 
R
e
d
i
s
 
w
i
t
h
 
a
n
 
a
t
o
m
i
c
 
I
N
C
R
/
L
u
a
 
s
c
r
i
p
t
 
a
c
r
o
s
s
 
a
l
l
 
i
n
s
t
a
n
c
e
s
.
 
E
a
c
h
 
r
e
q
u
e
s
t
 
h
i
t
s
 
R
e
d
i
s
 
t
o
 
c
o
o
r
d
i
n
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
W
h
y
 
i
s
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
m
o
r
e
 
m
e
m
o
r
y
-
e
x
p
e
n
s
i
v
e
 
t
h
a
n
 
t
o
k
e
n
 
b
u
c
k
e
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
B
i
g
g
e
r
 
c
o
d
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
n
e
e
d
s
 
t
o
 
t
r
a
c
k
 
t
i
m
e
s
t
a
m
p
s
 
o
f
 
r
e
c
e
n
t
 
r
e
q
u
e
s
t
s
 
p
e
r
 
i
d
e
n
t
i
t
y
 
(
o
f
t
e
n
 
a
 
l
i
s
t
 
o
r
 
s
o
r
t
e
d
 
s
e
t
)
,
 
w
h
i
l
e
 
t
o
k
e
n
 
b
u
c
k
e
t
 
n
e
e
d
s
 
j
u
s
t
 
t
w
o
 
n
u
m
b
e
r
s
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
u
s
e
s
 
G
P
U
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
c
o
m
p
r
e
s
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
T
o
k
e
n
 
b
u
c
k
e
t
 
p
e
r
 
i
d
e
n
t
i
t
y
:
 
t
o
k
e
n
s
 
c
o
u
n
t
 
+
 
l
a
s
t
-
r
e
f
i
l
l
 
t
i
m
e
s
t
a
m
p
 
=
 
1
6
 
b
y
t
e
s
.
 
S
l
i
d
i
n
g
 
w
i
n
d
o
w
:
 
l
i
s
t
 
o
f
 
e
v
e
r
y
 
r
e
c
e
n
t
 
r
e
q
u
e
s
t
 
t
i
m
e
s
t
a
m
p
,
 
c
a
n
 
g
r
o
w
 
t
o
 
t
h
o
u
s
a
n
d
s
 
p
e
r
 
i
d
e
n
t
i
t
y
.
 
M
e
m
o
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
c
e
 
i
s
 
1
0
0
-
1
0
0
0
×
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
R
a
t
e
 
L
i
m
i
t
i
n
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
6
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
 
'
h
o
w
 
d
o
 
y
o
u
 
p
r
o
t
e
c
t
 
t
h
i
s
 
A
P
I
 
f
r
o
m
 
a
b
u
s
e
'
 
s
t
a
n
d
a
r
d
 
a
n
s
w
e
r
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
