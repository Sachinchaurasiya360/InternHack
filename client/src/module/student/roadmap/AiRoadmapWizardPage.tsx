
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
 
R
e
a
c
t
N
o
d
e
,
 
t
y
p
e
 
K
e
y
b
o
a
r
d
E
v
e
n
t
 
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
 
u
s
e
N
a
v
i
g
a
t
e
,
 
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


 
 
A
r
r
o
w
R
i
g
h
t
,


 
 
C
h
e
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
L
e
f
t
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


 
 
W
a
n
d
2
,


 
 
P
l
u
s
,


 
 
X
,


 
 
M
a
p
 
a
s
 
M
a
p
I
c
o
n
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
 
B
u
t
t
o
n
 
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
b
u
t
t
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
 
N
a
v
b
a
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
N
a
v
b
a
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
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
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
S
t
u
d
e
n
t
S
i
d
e
b
a
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
 
u
s
e
A
u
t
h
S
t
o
r
e
 
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
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
a
p
i
 
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
a
x
i
o
s
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
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
t
o
a
s
t
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
 
D
a
y
O
f
W
e
e
k
,
 
R
o
a
d
m
a
p
E
n
r
o
l
l
m
e
n
t
L
i
s
t
I
t
e
m
 
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
t
y
p
e
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
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{
 
q
u
e
r
y
K
e
y
s
 
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
q
u
e
r
y
-
k
e
y
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




t
y
p
e
 
B
a
c
k
g
r
o
u
n
d
 
=
 
"
C
S
_
S
T
U
D
E
N
T
"
 
|
 
"
S
E
L
F
_
T
A
U
G
H
T
"
 
|
 
"
C
A
R
E
E
R
_
S
W
I
T
C
H
E
R
"
 
|
 
"
H
O
B
B
Y
I
S
T
"
 
|
 
"
W
O
R
K
I
N
G
_
P
R
O
"
;


t
y
p
e
 
E
x
p
e
r
i
e
n
c
e
 
=
 
"
N
E
W
"
 
|
 
"
S
O
M
E
"
 
|
 
"
E
X
P
E
R
I
E
N
C
E
D
"
;


t
y
p
e
 
G
o
a
l
 
=
 
"
J
O
B
_
R
E
A
D
Y
"
 
|
 
"
S
I
D
E
_
P
R
O
J
E
C
T
"
 
|
 
"
S
C
H
O
O
L
"
 
|
 
"
C
U
R
I
O
U
S
"
;




c
o
n
s
t
 
D
A
Y
S
:
 
D
a
y
O
f
W
e
e
k
[
]
 
=
 
[
"
M
O
N
"
,
 
"
T
U
E
"
,
 
"
W
E
D
"
,
 
"
T
H
U
"
,
 
"
F
R
I
"
,
 
"
S
A
T
"
,
 
"
S
U
N
"
]
;


c
o
n
s
t
 
D
A
Y
_
L
A
B
E
L
:
 
R
e
c
o
r
d
<
D
a
y
O
f
W
e
e
k
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
M
O
N
:
 
"
M
o
n
"
,
 
T
U
E
:
 
"
T
u
e
"
,
 
W
E
D
:
 
"
W
e
d
"
,
 
T
H
U
:
 
"
T
h
u
"
,
 
F
R
I
:
 
"
F
r
i
"
,
 
S
A
T
:
 
"
S
a
t
"
,
 
S
U
N
:
 
"
S
u
n
"
,


}
;




c
o
n
s
t
 
E
X
P
E
R
I
E
N
C
E
_
O
P
T
S
:
 
{
 
v
a
l
u
e
:
 
E
x
p
e
r
i
e
n
c
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
 
b
o
d
y
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
 
v
a
l
u
e
:
 
"
N
E
W
"
,
 
l
a
b
e
l
:
 
"
B
r
a
n
d
 
n
e
w
"
,
 
b
o
d
y
:
 
"
N
e
v
e
r
 
c
o
d
e
d
,
 
o
r
 
v
e
r
y
 
l
i
t
t
l
e
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
O
M
E
"
,
 
l
a
b
e
l
:
 
"
S
o
m
e
 
e
x
p
e
r
i
e
n
c
e
"
,
 
b
o
d
y
:
 
"
T
u
t
o
r
i
a
l
s
,
 
s
c
h
o
o
l
,
 
s
i
d
e
 
p
r
o
j
e
c
t
s
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
E
X
P
E
R
I
E
N
C
E
D
"
,
 
l
a
b
e
l
:
 
"
E
x
p
e
r
i
e
n
c
e
d
"
,
 
b
o
d
y
:
 
"
C
o
m
f
o
r
t
a
b
l
e
 
b
u
i
l
d
i
n
g
,
 
w
a
n
t
 
d
e
p
t
h
.
"
 
}
,


]
;




c
o
n
s
t
 
B
A
C
K
G
R
O
U
N
D
_
O
P
T
S
:
 
{
 
v
a
l
u
e
:
 
B
a
c
k
g
r
o
u
n
d
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
 
b
o
d
y
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
 
v
a
l
u
e
:
 
"
C
S
_
S
T
U
D
E
N
T
"
,
 
l
a
b
e
l
:
 
"
C
S
 
s
t
u
d
e
n
t
"
,
 
b
o
d
y
:
 
"
I
n
 
c
o
l
l
e
g
e
 
o
r
 
a
 
C
S
 
p
r
o
g
r
a
m
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
E
L
F
_
T
A
U
G
H
T
"
,
 
l
a
b
e
l
:
 
"
S
e
l
f
-
t
a
u
g
h
t
"
,
 
b
o
d
y
:
 
"
L
e
a
r
n
i
n
g
 
o
n
 
y
o
u
r
 
o
w
n
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
C
A
R
E
E
R
_
S
W
I
T
C
H
E
R
"
,
 
l
a
b
e
l
:
 
"
C
a
r
e
e
r
 
s
w
i
t
c
h
e
r
"
,
 
b
o
d
y
:
 
"
F
r
o
m
 
a
 
n
o
n
-
t
e
c
h
 
f
i
e
l
d
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
W
O
R
K
I
N
G
_
P
R
O
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
o
r
k
i
n
g
 
p
r
o
"
,
 
b
o
d
y
:
 
"
A
l
r
e
a
d
y
 
i
n
 
t
e
c
h
,
 
l
e
v
e
l
i
n
g
 
u
p
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
H
O
B
B
Y
I
S
T
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
o
b
b
y
i
s
t
"
,
 
b
o
d
y
:
 
"
J
u
s
t
 
f
o
r
 
f
u
n
.
"
 
}
,


]
;




c
o
n
s
t
 
G
O
A
L
_
O
P
T
S
:
 
{
 
v
a
l
u
e
:
 
G
o
a
l
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
 
b
o
d
y
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
 
v
a
l
u
e
:
 
"
J
O
B
_
R
E
A
D
Y
"
,
 
l
a
b
e
l
:
 
"
G
e
t
 
j
o
b
 
r
e
a
d
y
"
,
 
b
o
d
y
:
 
"
B
u
i
l
d
 
a
 
p
o
r
t
f
o
l
i
o
 
t
h
a
t
 
l
a
n
d
s
 
i
n
t
e
r
v
i
e
w
s
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
I
D
E
_
P
R
O
J
E
C
T
"
,
 
l
a
b
e
l
:
 
"
B
u
i
l
d
 
a
 
s
i
d
e
 
p
r
o
j
e
c
t
"
,
 
b
o
d
y
:
 
"
I
 
h
a
v
e
 
a
n
 
i
d
e
a
 
a
n
d
 
w
a
n
t
 
t
o
 
s
h
i
p
 
i
t
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
C
H
O
O
L
"
,
 
l
a
b
e
l
:
 
"
S
c
h
o
o
l
 
/
 
c
o
u
r
s
e
w
o
r
k
"
,
 
b
o
d
y
:
 
"
R
e
i
n
f
o
r
c
e
 
w
h
a
t
 
I
'
m
 
l
e
a
r
n
i
n
g
 
i
n
 
c
l
a
s
s
.
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
C
U
R
I
O
U
S
"
,
 
l
a
b
e
l
:
 
"
C
u
r
i
o
u
s
"
,
 
b
o
d
y
:
 
"
I
 
j
u
s
t
 
w
a
n
t
 
t
o
 
u
n
d
e
r
s
t
a
n
d
 
t
h
e
 
s
t
a
c
k
.
"
 
}
,


]
;




c
o
n
s
t
 
S
T
E
P
S
 
=
 
[


 
 
{
 
i
d
:
 
0
,
 
l
a
b
e
l
:
 
"
g
o
a
l
"
,
 
t
i
t
l
e
:
 
"
W
h
a
t
 
d
o
 
y
o
u
 
w
a
n
t
 
t
o
 
l
e
a
r
n
?
"
,
 
b
o
d
y
:
 
"
O
n
e
 
s
e
n
t
e
n
c
e
 
i
s
 
e
n
o
u
g
h
.
 
B
e
 
s
p
e
c
i
f
i
c
.
"
 
}
,


 
 
{
 
i
d
:
 
1
,
 
l
a
b
e
l
:
 
"
l
e
v
e
l
"
,
 
t
i
t
l
e
:
 
"
H
o
w
 
f
a
r
 
a
l
o
n
g
 
a
r
e
 
y
o
u
?
"
,
 
b
o
d
y
:
 
"
H
e
l
p
s
 
u
s
 
s
k
i
p
 
w
h
a
t
 
y
o
u
 
a
l
r
e
a
d
y
 
k
n
o
w
.
"
 
}
,


 
 
{
 
i
d
:
 
2
,
 
l
a
b
e
l
:
 
"
c
o
n
t
e
x
t
"
,
 
t
i
t
l
e
:
 
"
T
e
l
l
 
u
s
 
y
o
u
r
 
s
t
o
r
y
"
,
 
b
o
d
y
:
 
"
B
a
c
k
g
r
o
u
n
d
 
a
n
d
 
w
h
a
t
 
y
o
u
 
w
a
n
t
 
o
u
t
 
o
f
 
t
h
i
s
.
"
 
}
,


 
 
{
 
i
d
:
 
3
,
 
l
a
b
e
l
:
 
"
t
o
p
i
c
s
"
,
 
t
i
t
l
e
:
 
"
S
p
e
c
i
f
i
c
 
t
o
o
l
s
 
o
r
 
t
o
p
i
c
s
?
"
,
 
b
o
d
y
:
 
"
O
p
t
i
o
n
a
l
.
 
A
n
y
t
h
i
n
g
 
t
h
a
t
 
m
u
s
t
 
b
e
 
i
n
 
o
r
 
s
t
a
y
 
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
 
4
,
 
l
a
b
e
l
:
 
"
p
a
c
e
"
,
 
t
i
t
l
e
:
 
"
H
o
w
 
m
u
c
h
 
t
i
m
e
 
c
a
n
 
y
o
u
 
g
i
v
e
?
"
,
 
b
o
d
y
:
 
"
W
e
 
p
a
c
e
 
t
h
e
 
p
l
a
n
 
t
o
 
y
o
u
r
 
r
e
a
l
 
s
c
h
e
d
u
l
e
.
"
 
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
 
C
h
r
o
m
e
(
{
 
c
h
i
l
d
r
e
n
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
 
}
:
 
{


 
 
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
N
o
d
e
;


 
 
s
i
d
e
b
a
r
W
i
d
t
h
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
l
l
a
p
s
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
i
d
e
b
a
r
:
 
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
h
-
s
c
r
e
e
n
 
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
5
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
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
s
i
d
e
b
a
r
O
f
f
s
e
t
=
{
s
i
d
e
b
a
r
W
i
d
t
h
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
l
g
:
h
i
d
d
e
n
"
>
<
N
a
v
b
a
r
 
/
>
<
/
d
i
v
>


 
 
 
 
 
 
{
s
i
d
e
b
a
r
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
{
`
p
t
-
1
6
 
l
g
:
p
t
-
2
4
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
$
{
c
o
l
l
a
p
s
e
d
 
?
 
"
l
g
:
m
l
-
1
8
"
 
:
 
"
l
g
:
m
l
-
6
4
"
}
`
}
>


 
 
 
 
 
 
 
 
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
 
A
i
R
o
a
d
m
a
p
W
i
z
a
r
d
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
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
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
 
{
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
{
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
s
i
d
e
b
a
r
 
}
 
=
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
r
(
)
;


 
 
c
o
n
s
t
 
[
s
t
e
p
,
 
s
e
t
S
t
e
p
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




 
 
/
/
 
I
n
p
u
t
s


 
 
c
o
n
s
t
 
[
g
o
a
l
D
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
,
 
s
e
t
G
o
a
l
D
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
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
,
 
s
e
t
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
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
E
x
p
e
r
i
e
n
c
e
>
(
"
N
E
W
"
)
;


 
 
c
o
n
s
t
 
[
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
,
 
s
e
t
B
a
c
k
g
r
o
u
n
d
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
B
a
c
k
g
r
o
u
n
d
>
(
"
S
E
L
F
_
T
A
U
G
H
T
"
)
;


 
 
c
o
n
s
t
 
[
g
o
a
l
,
 
s
e
t
G
o
a
l
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
o
a
l
>
(
"
J
O
B
_
R
E
A
D
Y
"
)
;


 
 
c
o
n
s
t
 
[
k
n
o
w
n
S
k
i
l
l
s
,
 
s
e
t
K
n
o
w
n
S
k
i
l
l
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
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
m
u
s
t
I
n
c
l
u
d
e
,
 
s
e
t
M
u
s
t
I
n
c
l
u
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
s
t
r
i
n
g
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
a
v
o
i
d
,
 
s
e
t
A
v
o
i
d
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
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
h
o
u
r
s
P
e
r
W
e
e
k
,
 
s
e
t
H
o
u
r
s
P
e
r
W
e
e
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
8
)
;


 
 
c
o
n
s
t
 
[
p
r
e
f
e
r
r
e
d
D
a
y
s
,
 
s
e
t
P
r
e
f
e
r
r
e
d
D
a
y
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
D
a
y
O
f
W
e
e
k
[
]
>
(
[
"
M
O
N
"
,
 
"
W
E
D
"
,
 
"
S
A
T
"
]
)
;




 
 
/
/
 
S
u
b
m
i
s
s
i
o
n


 
 
c
o
n
s
t
 
[
s
u
b
m
i
t
t
i
n
g
,
 
s
e
t
S
u
b
m
i
t
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
s
u
b
m
i
t
M
s
g
I
d
x
,
 
s
e
t
S
u
b
m
i
t
M
s
g
I
d
x
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
d
i
s
m
i
s
s
e
d
W
a
r
n
i
n
g
,
 
s
e
t
D
i
s
m
i
s
s
e
d
W
a
r
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




 
 
/
/
 
E
x
i
s
t
i
n
g
 
e
n
r
o
l
l
m
e
n
t
s
 
l
i
n
k


 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
e
n
r
o
l
l
m
e
n
t
s
D
a
t
a
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
r
o
a
d
m
a
p
s
.
e
n
r
o
l
l
m
e
n
t
s
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
{
 
e
n
r
o
l
l
m
e
n
t
s
:
 
R
o
a
d
m
a
p
E
n
r
o
l
l
m
e
n
t
L
i
s
t
I
t
e
m
[
]
 
}
>
(
"
/
r
o
a
d
m
a
p
s
/
m
e
/
e
n
r
o
l
l
m
e
n
t
s
"
)
.
t
h
e
n
(
r
e
s
 
=
>
 
r
e
s
.
d
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
u
s
e
r
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
2
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
e
n
r
o
l
l
m
e
n
t
s
 
=
 
e
n
r
o
l
l
m
e
n
t
s
D
a
t
a
?
.
e
n
r
o
l
l
m
e
n
t
s
 
|
|
 
[
]
;




 
 
c
o
n
s
t
 
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
 
=
 
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
u
s
e
r
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
 
u
s
e
r
A
i
R
o
a
d
m
a
p
s
 
=
 
e
n
r
o
l
l
m
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
e
 
=
>
 
e
.
r
o
a
d
m
a
p
.
o
w
n
e
r
U
s
e
r
I
d
 
=
=
=
 
u
s
e
r
.
i
d
)
;


 
 
 
 
c
o
n
s
t
 
n
o
r
m
a
l
i
z
e
 
=
 
(
s
t
r
:
 
s
t
r
i
n
g
)
 
=
>
 
s
t
r
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
r
e
p
l
a
c
e
(
/
[
^
\
w
\
s
]
/
g
,
 
"
"
)
;


 
 
 
 
c
o
n
s
t
 
g
o
a
l
N
o
r
m
 
=
 
n
o
r
m
a
l
i
z
e
(
g
o
a
l
D
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
)
;


 
 
 
 
i
f
 
(
!
g
o
a
l
N
o
r
m
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


 
 
 
 


 
 
 
 
r
e
t
u
r
n
 
u
s
e
r
A
i
R
o
a
d
m
a
p
s
.
f
i
n
d
(
e
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
i
t
l
e
N
o
r
m
 
=
 
n
o
r
m
a
l
i
z
e
(
e
.
r
o
a
d
m
a
p
.
t
i
t
l
e
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
t
i
t
l
e
N
o
r
m
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
g
o
a
l
N
o
r
m
)
 
|
|
 
g
o
a
l
N
o
r
m
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
t
i
t
l
e
N
o
r
m
)
;


 
 
 
 
}
)
;


 
 
}
)
(
)
;


 
 


 
 
c
o
n
s
t
 
[
f
o
r
c
e
C
r
e
a
t
e
,
 
s
e
t
F
o
r
c
e
C
r
e
a
t
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
(
f
a
l
s
e
)
;




 
 
/
/
 
R
o
t
a
t
i
n
g
 
l
o
a
d
i
n
g
 
c
o
p
y


 
 
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
s
u
b
m
i
t
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


 
 
 
 
c
o
n
s
t
 
i
d
 
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
S
u
b
m
i
t
M
s
g
I
d
x
(
(
i
)
 
=
>
 
i
 
+
 
1
)
,
 
2
2
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
i
d
)
;


 
 
}
,
 
[
s
u
b
m
i
t
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
 
t
o
g
g
l
e
D
a
y
 
=
 
(
d
:
 
D
a
y
O
f
W
e
e
k
)
 
=
>
 
{


 
 
 
 
s
e
t
P
r
e
f
e
r
r
e
d
D
a
y
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
 
p
r
e
v
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
d
)
 
?
 
p
r
e
v
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
 
!
=
=
 
d
)
 
:
 
[
.
.
.
p
r
e
v
,
 
d
]
)
;


 
 
}
;




 
 
c
o
n
s
t
 
c
a
n
P
r
o
c
e
e
d
 
=
 
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
t
e
p
 
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
 
g
o
a
l
D
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
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
>
=
 
1
0
;


 
 
 
 
i
f
 
(
s
t
e
p
 
=
=
=
 
4
)
 
r
e
t
u
r
n
 
p
r
e
f
e
r
r
e
d
D
a
y
s
.
l
e
n
g
t
h
 
>
 
0
;


 
 
 
 
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
(
)
;




 
 
c
o
n
s
t
 
s
u
b
m
i
t
 
=
 
a
s
y
n
c
 
(
f
o
r
c
e
 
=
 
f
a
l
s
e
)
 
=
>
 
{


 
 
 
 
s
e
t
S
u
b
m
i
t
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


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
<
{
 
s
l
u
g
:
 
s
t
r
i
n
g
;
 
e
n
r
o
l
l
m
e
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
 
}
>
(


 
 
 
 
 
 
 
 
"
/
r
o
a
d
m
a
p
s
/
a
i
/
g
e
n
e
r
a
t
e
"
,


 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
g
o
a
l
D
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
:
 
g
o
a
l
D
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
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
 
 
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
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
,


 
 
 
 
 
 
 
 
 
 
g
o
a
l
,


 
 
 
 
 
 
 
 
 
 
h
o
u
r
s
P
e
r
W
e
e
k
,


 
 
 
 
 
 
 
 
 
 
p
r
e
f
e
r
r
e
d
D
a
y
s
,


 
 
 
 
 
 
 
 
 
 
k
n
o
w
n
S
k
i
l
l
s
,


 
 
 
 
 
 
 
 
 
 
m
u
s
t
I
n
c
l
u
d
e
,


 
 
 
 
 
 
 
 
 
 
a
v
o
i
d
,


 
 
 
 
 
 
 
 
 
 
f
o
r
c
e
C
r
e
a
t
e
:
 
f
o
r
c
e
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
Y
o
u
r
 
r
o
a
d
m
a
p
 
i
s
 
r
e
a
d
y
"
)
;


 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
r
e
s
.
d
a
t
a
.
s
l
u
g
}
`
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
x
i
o
s
E
r
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
s
t
a
t
u
s
?
:
 
n
u
m
b
e
r
;
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
;
 
r
o
a
d
m
a
p
?
:
 
{
 
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
 
s
l
u
g
:
 
s
t
r
i
n
g
 
}
 
}
 
}
 
}
;


 
 
 
 
 
 
i
f
 
(
a
x
i
o
s
E
r
r
.
r
e
s
p
o
n
s
e
?
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
 
4
0
9
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
a
x
i
o
s
E
r
r
.
r
e
s
p
o
n
s
e
.
d
a
t
a
?
.
m
e
s
s
a
g
e
?
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
l
i
m
i
t
"
)
)
 
{


 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
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
 
g
a
p
-
2
 
p
-
1
 
t
e
x
t
-
l
e
f
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
>
Y
o
u
 
h
a
v
e
 
r
e
a
c
h
e
d
 
t
h
e
 
l
i
m
i
t
 
o
f
 
5
 
a
c
t
i
v
e
 
A
I
 
r
o
a
d
m
a
p
s
.
 
P
l
e
a
s
e
 
c
o
m
p
l
e
t
e
 
o
r
 
d
e
l
e
t
e
 
e
x
i
s
t
i
n
g
 
o
n
e
s
 
f
i
r
s
t
.
<
/
p
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
r
o
a
d
m
a
p
s
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
5
0
 
h
o
v
e
r
:
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
a
n
a
g
e
 
r
o
a
d
m
a
p
s
 
→


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>
,


 
 
 
 
 
 
 
 
 
 
 
 
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
 
8
0
0
0
 
}


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
a
x
i
o
s
E
r
r
.
r
e
s
p
o
n
s
e
.
d
a
t
a
?
.
r
o
a
d
m
a
p
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
u
p
l
i
c
a
t
e
 
=
 
a
x
i
o
s
E
r
r
.
r
e
s
p
o
n
s
e
.
d
a
t
a
.
r
o
a
d
m
a
p
;


 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
w
a
r
n
i
n
g
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
 
g
a
p
-
2
 
p
-
1
 
t
e
x
t
-
l
e
f
t
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
f
o
n
t
-
b
o
l
d
"
>
S
i
m
i
l
a
r
 
r
o
a
d
m
a
p
 
e
x
i
s
t
s
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
 
o
p
a
c
i
t
y
-
7
0
"
>
W
e
 
f
o
u
n
d
 
&
q
u
o
t
;
{
d
u
p
l
i
c
a
t
e
.
t
i
t
l
e
}
&
q
u
o
t
;
 
w
h
i
c
h
 
s
e
e
m
s
 
s
i
m
i
l
a
r
 
t
o
 
y
o
u
r
 
g
o
a
l
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
t
-
1
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
{
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
d
u
p
l
i
c
a
t
e
.
s
l
u
g
}
`
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
x
s
 
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
5
0
 
h
o
v
e
r
:
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
e
x
i
s
t
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
a
s
t
.
d
i
s
m
i
s
s
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
m
i
t
(
t
r
u
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
b
o
l
d
 
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
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
 
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
 
b
o
r
d
e
r
-
0
 
p
-
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
r
e
a
t
e
 
a
n
y
w
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
>
,


 
 
 
 
 
 
 
 
 
 
 
 
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
0
0
0
0
 
}


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
a
x
i
o
s
E
r
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
?
?
 
"
C
o
u
l
d
 
n
o
t
 
g
e
n
e
r
a
t
e
 
r
o
a
d
m
a
p
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
m
s
g
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
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


 
 
}
;




 
 
c
o
n
s
t
 
c
h
r
o
m
e
P
r
o
p
s
 
=
 
{
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
 
}
;


 
 
c
o
n
s
t
 
s
t
e
p
M
e
t
a
 
=
 
S
T
E
P
S
[
s
t
e
p
]
;


 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
(
(
s
t
e
p
 
+
 
1
)
 
/
 
S
T
E
P
S
.
l
e
n
g
t
h
)
 
*
 
1
0
0
;




 
 
i
f
 
(
s
u
b
m
i
t
t
i
n
g
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
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
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
m
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
y
-
2
4
 
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
:
 
0
.
6
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
 
s
c
a
l
e
:
 
1
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
2
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
2
 
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
2
0
 
w
-
2
0
 
r
o
u
n
d
e
d
-
2
x
l
 
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
5
0
 
m
b
-
6
 
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
9
 
h
-
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
2
.
5
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
:
 
1
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
5
 
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
:
 
1
.
6
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
6
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
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
-
2
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
/
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
3
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
4
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
5
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
C
r
a
f
t
i
n
g
 
y
o
u
r
 
r
o
a
d
m
a
p


 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
u
b
m
i
t
M
s
g
I
d
x
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
 
m
b
-
1
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
L
O
A
D
I
N
G
_
M
E
S
S
A
G
E
S
[
s
u
b
m
i
t
M
s
g
I
d
x
 
%
 
L
O
A
D
I
N
G
_
M
E
S
S
A
G
E
S
.
l
e
n
g
t
h
]
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
p
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
y
:
 
[
0
,
 
-
8
,
 
0
]
,
 
o
p
a
c
i
t
y
:
 
[
0
.
4
,
 
1
,
 
0
.
4
]
 
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
1
5
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
I
n
O
u
t
"
 
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
h
-
2
 
w
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
f
u
l
l
 
b
g
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
/
C
h
r
o
m
e
>


 
 
 
 
)
;


 
 
}




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
C
h
r
o
m
e
 
{
.
.
.
c
h
r
o
m
e
P
r
o
p
s
}
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
e
n
e
r
a
t
e
 
a
 
p
e
r
s
o
n
a
l
i
z
e
d
 
r
o
a
d
m
a
p
 
w
i
t
h
 
A
I
"
 
n
o
I
n
d
e
x
 
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
3
x
l
 
m
x
-
a
u
t
o
 
p
x
-
6
 
p
b
-
1
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
D
e
c
o
r
a
t
i
v
e
 
g
r
a
d
i
e
n
t
 
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
 
-
z
-
1
0
 
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
4
0
 
l
e
f
t
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
x
-
1
/
2
 
w
-
2
0
0
 
h
-
1
5
0
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
l
i
m
e
-
1
0
0
 
v
i
a
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
o
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
f
r
o
m
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
2
0
 
d
a
r
k
:
v
i
a
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
 
d
a
r
k
:
t
o
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
/
3
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
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
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
e
n
r
o
l
l
m
e
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
 
>
 
0
 
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
 
-
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
b
-
6
 
m
t
-
2
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
r
o
a
d
m
a
p
s
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
s
t
o
n
e
-
8
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
l
i
m
e
-
6
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
5
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
M
a
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
n
r
o
l
l
m
e
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
3
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
7
0
0
"
>
/
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
 
m
y
 
r
o
a
d
m
a
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
3
 
h
-
3
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
E
y
e
b
r
o
w
 
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
2
 
m
b
-
6
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
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
3
"
>
g
e
n
e
r
a
t
e
 
w
i
t
h
 
a
i
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
2
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
3
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
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
B
u
i
l
d
 
a
 
r
o
a
d
m
a
p
 
t
h
a
t
 
f
i
t
s
 
y
o
u
.


 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
s
t
e
p
 
=
=
=
 
4
 
&
&
 
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
 
&
&
 
!
f
o
r
c
e
C
r
e
a
t
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
 
s
c
a
l
e
:
 
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
 
p
-
4
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
a
m
b
e
r
-
5
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
2
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
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
 
f
l
e
x
 
g
a
p
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
h
-
1
0
 
w
-
1
0
 
s
h
r
i
n
k
-
0
 
r
o
u
n
d
e
d
-
x
l
 
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
0
0
/
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
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
"
w
-
5
 
h
-
5
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
a
m
b
e
r
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
a
m
b
e
r
-
2
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
a
i
t
,
 
i
s
 
t
h
i
s
 
f
a
m
i
l
i
a
r
?


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
/
8
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
/
8
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
 
a
l
r
e
a
d
y
 
h
a
v
e
 
a
n
 
a
c
t
i
v
e
 
r
o
a
d
m
a
p
 
c
a
l
l
e
d
 
<
s
t
r
o
n
g
>
"
{
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
.
r
o
a
d
m
a
p
.
t
i
t
l
e
}
"
<
/
s
t
r
o
n
g
>
.
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
a
n
t
 
t
o
 
c
o
n
t
i
n
u
e
 
w
h
e
r
e
 
y
o
u
 
l
e
f
t
 
o
f
f
?


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
s
i
z
e
=
"
s
m
"
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
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
a
m
b
e
r
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
a
m
b
e
r
-
8
0
0
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
{
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
.
r
o
a
d
m
a
p
.
s
l
u
g
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
e
n
 
E
x
i
s
t
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
s
i
z
e
=
"
s
m
"
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
F
o
r
c
e
C
r
e
a
t
e
(
t
r
u
e
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
r
e
a
t
e
 
a
n
y
w
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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




 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
b
a
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
8
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
2
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
o
n
e
 
=
 
s
.
i
d
 
<
 
s
t
e
p
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
e
p
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
h
-
0
.
5
 
w
-
f
u
l
l
 
b
g
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
 
r
o
u
n
d
e
d
-
f
u
l
l
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
h
-
f
u
l
l
 
$
{
d
o
n
e
 
|
|
 
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
l
i
m
e
-
5
0
0
"
 
:
 
"
"
}
`
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
 
d
o
n
e
 
?
 
"
1
0
0
%
"
 
:
 
a
c
t
i
v
e
 
?
 
"
5
0
%
"
 
:
 
"
0
%
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
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
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
/
d
i
v
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
4
0
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
s
t
e
p
M
e
t
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
{
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
p
r
o
g
r
e
s
s
)
}
%
 
/
 
s
t
e
p
 
{
s
t
e
p
 
+
 
1
}
 
o
f
 
{
S
T
E
P
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
 
S
t
e
p
 
b
o
d
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
e
p
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
 
x
:
 
2
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
 
x
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
 
x
:
 
-
2
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
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
3
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
4
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
5
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
M
e
t
a
.
t
i
t
l
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
 
m
b
-
8
"
>
{
s
t
e
p
M
e
t
a
.
b
o
d
y
}
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
0
 
&
&
 
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
s
t
o
n
e
-
8
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
2
x
l
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
o
a
l
D
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
G
o
a
l
D
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
e
.
g
.
,
 
I
 
w
a
n
t
 
t
o
 
b
e
c
o
m
e
 
a
 
f
u
l
l
-
s
t
a
c
k
 
d
e
v
e
l
o
p
e
r
 
a
n
d
 
s
h
i
p
 
a
 
S
a
a
S
 
i
n
 
4
 
m
o
n
t
h
s
.
 
I
'
m
 
i
n
t
e
r
e
s
t
e
d
 
i
n
 
R
e
a
c
t
 
a
n
d
 
P
o
s
t
g
r
e
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
L
e
n
g
t
h
=
{
5
0
0
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
f
u
l
l
 
p
-
4
 
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
 
b
o
r
d
e
r
-
0
 
o
u
t
l
i
n
e
-
0
 
t
e
x
t
-
b
a
s
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
e
s
i
z
e
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
t
-
2
 
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
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
o
a
l
D
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
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
<
 
1
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
a
t
 
l
e
a
s
t
 
1
0
 
c
h
a
r
a
c
t
e
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
l
o
o
k
s
 
g
o
o
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
o
a
l
D
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
.
l
e
n
g
t
h
}
 
/
 
5
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
1
 
&
&
 
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
 
s
m
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
E
X
P
E
R
I
E
N
C
E
_
O
P
T
S
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
c
k
a
b
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
e
x
p
e
r
i
e
n
c
e
L
e
v
e
l
 
=
=
=
 
o
.
v
a
l
u
e
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
E
x
p
e
r
i
e
n
c
e
L
e
v
e
l
(
o
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
a
y
=
{
0
.
0
5
 
+
 
i
 
*
 
0
.
0
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
"
>
{
o
.
l
a
b
e
l
}
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
x
s
 
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
 
m
t
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
o
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
c
k
a
b
l
e
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




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
2
 
&
&
 
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
4
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
o
u
r
 
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
g
r
i
d
 
s
m
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
B
A
C
K
G
R
O
U
N
D
_
O
P
T
S
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
c
k
a
b
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
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
 
=
=
=
 
o
.
v
a
l
u
e
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
B
a
c
k
g
r
o
u
n
d
(
o
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
a
y
=
{
0
.
0
5
 
+
 
i
 
*
 
0
.
0
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
"
>
{
o
.
l
a
b
e
l
}
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
x
s
 
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
 
m
t
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
o
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
c
k
a
b
l
e
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
4
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
i
m
a
r
y
 
g
o
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
 
s
m
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
G
O
A
L
_
O
P
T
S
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
c
k
a
b
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
o
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
g
o
a
l
 
=
=
=
 
o
.
v
a
l
u
e
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
G
o
a
l
(
o
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
a
y
=
{
0
.
1
 
+
 
i
 
*
 
0
.
0
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
"
>
{
o
.
l
a
b
e
l
}
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
x
s
 
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
 
m
t
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
o
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
c
k
a
b
l
e
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
3
 
&
&
 
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
C
h
i
p
s
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
l
r
e
a
d
y
 
c
o
m
f
o
r
t
a
b
l
e
 
w
i
t
h
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
n
t
=
"
W
e
'
l
l
 
s
k
i
p
 
t
h
e
s
e
.
 
P
r
e
s
s
 
E
n
t
e
r
 
t
o
 
a
d
d
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
k
n
o
w
n
S
k
i
l
l
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
s
e
t
K
n
o
w
n
S
k
i
l
l
s
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
e
.
g
.
,
 
H
T
M
L
,
 
J
a
v
a
S
c
r
i
p
t
,
 
G
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
i
p
s
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
M
u
s
t
 
i
n
c
l
u
d
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
n
t
=
"
T
o
p
i
c
s
 
o
r
 
t
o
o
l
s
 
y
o
u
 
s
p
e
c
i
f
i
c
a
l
l
y
 
w
a
n
t
 
c
o
v
e
r
e
d
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
m
u
s
t
I
n
c
l
u
d
e
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
s
e
t
M
u
s
t
I
n
c
l
u
d
e
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
e
.
g
.
,
 
T
y
p
e
S
c
r
i
p
t
,
 
P
o
s
t
g
r
e
s
,
 
D
o
c
k
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
i
p
s
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
v
o
i
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
n
t
=
"
T
o
p
i
c
s
 
o
r
 
t
o
o
l
s
 
t
o
 
s
k
i
p
 
e
n
t
i
r
e
l
y
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
a
v
o
i
d
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
s
e
t
A
v
o
i
d
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
e
.
g
.
,
 
P
H
P
,
 
j
Q
u
e
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
4
 
&
&
 
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
s
p
a
c
e
-
y
-
5
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
s
t
o
n
e
-
8
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
2
x
l
 
p
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
 
i
t
e
m
s
-
b
a
s
e
l
i
n
e
 
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
 
m
b
-
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
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
o
u
r
s
 
p
e
r
 
w
e
e
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
o
u
r
s
P
e
r
W
e
e
k
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
 
1
8
 
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
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
4
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
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
o
u
r
s
P
e
r
W
e
e
k
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
t
e
x
t
-
b
a
s
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
4
0
0
 
f
o
n
t
-
n
o
r
m
a
l
 
m
l
-
1
"
>
h
<
/
s
p
a
n
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
e
p
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
h
o
u
r
s
P
e
r
W
e
e
k
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
H
o
u
r
s
P
e
r
W
e
e
k
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
f
u
l
l
 
a
c
c
e
n
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
2
 
f
l
e
x
 
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
 
t
e
x
t
-
[
9
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
>
2
h
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
2
0
h
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
4
0
h
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
s
t
o
n
e
-
8
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
2
x
l
 
p
-
6
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
4
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
f
e
r
r
e
d
 
s
t
u
d
y
 
d
a
y
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
7
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
A
Y
S
.
m
a
p
(
(
d
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
 
p
r
e
f
e
r
r
e
d
D
a
y
s
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
d
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
 
t
o
g
g
l
e
D
a
y
(
d
)
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
 
0
.
0
5
 
+
 
i
 
*
 
0
.
0
4
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
3
 
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
h
-
1
2
 
r
o
u
n
d
e
d
-
x
l
 
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
 
b
o
r
d
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
5
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
w
h
i
t
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
7
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
A
Y
_
L
A
B
E
L
[
d
]
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
e
f
e
r
r
e
d
D
a
y
s
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
i
c
k
 
a
t
 
l
e
a
s
t
 
o
n
e
 
d
a
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
e
l
a
y
:
 
0
.
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
s
t
o
n
e
-
9
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
5
0
 
r
o
u
n
d
e
d
-
2
x
l
 
p
-
5
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
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
 
n
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
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
s
p
a
c
e
-
y
-
2
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
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
"
>
<
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
 
/
>
 
A
I
 
d
r
a
f
t
s
 
a
 
r
o
a
d
m
a
p
 
b
a
s
e
d
 
o
n
 
y
o
u
r
 
a
n
s
w
e
r
s
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
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
"
>
<
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
 
/
>
 
W
e
 
g
e
n
e
r
a
t
e
 
a
 
p
e
r
s
o
n
a
l
i
z
e
d
 
P
D
F
 
a
n
d
 
e
m
a
i
l
 
i
t
 
t
o
 
y
o
u
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
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
"
>
<
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
 
/
>
 
Y
o
u
 
l
a
n
d
 
o
n
 
t
h
e
 
i
n
t
e
r
a
c
t
i
v
e
 
c
a
n
v
a
s
 
t
o
 
s
t
a
r
t
 
t
r
a
c
k
i
n
g
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
c
o
l
 
g
a
p
-
4
 
m
t
-
8
"
>


 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
&
&
 
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
 
&
&
 
!
d
i
s
m
i
s
s
e
d
W
a
r
n
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
a
m
b
e
r
-
5
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
3
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
a
m
b
e
r
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
a
m
b
e
r
-
8
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
x
l
 
p
-
4
 
f
l
e
x
 
g
a
p
-
3
 
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
a
m
b
e
r
-
2
0
0
 
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
 
t
e
x
t
-
s
m
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
 
a
l
r
e
a
d
y
 
h
a
v
e
 
a
 
r
o
a
d
m
a
p
 
f
o
r
 
&
q
u
o
t
;
{
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
.
r
o
a
d
m
a
p
.
t
i
t
l
e
}
&
q
u
o
t
;
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
o
p
a
c
i
t
y
-
8
0
"
>
G
e
n
e
r
a
t
i
n
g
 
a
g
a
i
n
 
w
i
l
l
 
c
r
e
a
t
e
 
a
 
s
e
p
a
r
a
t
e
 
c
o
p
y
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
l
e
a
r
n
/
r
o
a
d
m
a
p
s
/
$
{
s
i
m
i
l
a
r
E
n
r
o
l
l
m
e
n
t
.
r
o
a
d
m
a
p
.
s
l
u
g
}
`
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
b
l
o
c
k
 
m
t
-
2
 
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
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
e
x
i
s
t
i
n
g
 
→


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
D
i
s
m
i
s
s
e
d
W
a
r
n
i
n
g
(
t
r
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
a
m
b
e
r
-
3
0
0
 
s
e
l
f
-
s
t
a
r
t
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
e
p
(
(
s
)
 
=
>
 
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
 
s
 
-
 
1
)
)
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
s
t
e
p
 
=
=
=
 
0
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
L
e
f
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
m
o
n
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
)
 
=
>
 
s
e
t
S
t
e
p
(
(
s
)
 
=
>
 
s
 
+
 
1
)
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
!
c
a
n
P
r
o
c
e
e
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
m
o
n
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
)
 
=
>
 
s
u
b
m
i
t
(
f
a
l
s
e
)
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
!
c
a
n
P
r
o
c
e
e
d
}
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
n
e
r
a
t
e
 
m
y
 
r
o
a
d
m
a
p


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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


 
 
 
 
<
/
C
h
r
o
m
e
>


 
 
)
;


}




/
/
 
─
─
 
S
u
b
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
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


f
u
n
c
t
i
o
n
 
P
i
c
k
a
b
l
e
(
{


 
 
a
c
t
i
v
e
,
 
o
n
C
l
i
c
k
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
 
d
e
l
a
y
 
=
 
0
,


}
:
 
{
 
a
c
t
i
v
e
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
C
l
i
c
k
:
 
(
)
 
=
>
 
v
o
i
d
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
N
o
d
e
;
 
d
e
l
a
y
?
:
 
n
u
m
b
e
r
 
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
o
n
C
l
i
c
k
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
3
 
}
}


 
 
 
 
 
 
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
8
 
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
{
`
t
e
x
t
-
l
e
f
t
 
r
o
u
n
d
e
d
-
x
l
 
p
-
4
 
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
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
9
5
0
/
3
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
7
0
0
"


 
 
 
 
 
 
 
 
 
 
:
 
"
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
8
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
s
t
o
n
e
-
6
0
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
"


 
 
 
 
 
 
}
`
}


 
 
 
 
>


 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
C
h
i
p
s
F
i
e
l
d
(
{


 
 
l
a
b
e
l
,
 
h
i
n
t
,
 
v
a
l
u
e
s
,
 
o
n
C
h
a
n
g
e
,
 
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
,


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


 
 
h
i
n
t
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
s
:
 
s
t
r
i
n
g
[
]
;


 
 
o
n
C
h
a
n
g
e
:
 
(
v
:
 
s
t
r
i
n
g
[
]
)
 
=
>
 
v
o
i
d
;


 
 
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
:
 
s
t
r
i
n
g
;


}
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
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
"
"
)
;




 
 
c
o
n
s
t
 
a
d
d
 
=
 
(
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
r
i
m
m
e
d
 
=
 
i
n
p
u
t
.
t
r
i
m
(
)
;


 
 
 
 
i
f
 
(
!
t
r
i
m
m
e
d
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
v
a
l
u
e
s
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
t
r
i
m
m
e
d
)
)
 
{


 
 
 
 
 
 
s
e
t
I
n
p
u
t
(
"
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
i
f
 
(
v
a
l
u
e
s
.
l
e
n
g
t
h
 
>
=
 
2
0
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
t
r
i
m
m
e
d
.
l
e
n
g
t
h
 
>
 
4
0
)
 
r
e
t
u
r
n
;


 
 
 
 
o
n
C
h
a
n
g
e
(
[
.
.
.
v
a
l
u
e
s
,
 
t
r
i
m
m
e
d
]
)
;


 
 
 
 
s
e
t
I
n
p
u
t
(
"
"
)
;


 
 
}
;




 
 
c
o
n
s
t
 
o
n
K
e
y
D
o
w
n
 
=
 
(
e
:
 
K
e
y
b
o
a
r
d
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
 
|
|
 
e
.
k
e
y
 
=
=
=
 
"
,
"
)
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
a
d
d
(
)
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
B
a
c
k
s
p
a
c
e
"
 
&
&
 
i
n
p
u
t
 
=
=
=
 
"
"
 
&
&
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
>
 
0
)
 
{


 
 
 
 
 
 
o
n
C
h
a
n
g
e
(
v
a
l
u
e
s
.
s
l
i
c
e
(
0
,
 
-
1
)
)
;


 
 
 
 
}


 
 
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
s
t
o
n
e
-
8
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
2
x
l
 
p
-
5
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
b
a
s
e
l
i
n
e
 
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
 
m
b
-
3
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
4
0
0
"
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
"
>
{
v
a
l
u
e
s
.
l
e
n
g
t
h
}
/
2
0
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
2
"
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
v
a
l
u
e
s
.
m
a
p
(
(
v
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
v
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
 
s
c
a
l
e
:
 
0
.
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
1
8
 
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
2
.
5
 
h
-
7
 
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
s
t
o
n
e
-
7
0
0
 
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
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
o
n
C
h
a
n
g
e
(
v
a
l
u
e
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
x
)
 
=
>
 
x
 
!
=
=
 
v
)
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
7
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
2
0
0
 
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
 
p
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
 
b
o
r
d
e
r
-
0
 
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
>


 
 
 
 
 
 
 
 
 
 
)
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
"
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
i
n
p
u
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
 
s
e
t
I
n
p
u
t
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


 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
o
n
K
e
y
D
o
w
n
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
{
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
-
1
 
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
 
b
o
r
d
e
r
-
0
 
o
u
t
l
i
n
e
-
0
 
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
a
d
d
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
!
i
n
p
u
t
.
t
r
i
m
(
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
7
 
w
-
7
 
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
5
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
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
1
0
0
 
d
a
r
k
:
d
i
s
a
b
l
e
d
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
P
l
u
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
 
m
t
-
2
"
>
{
h
i
n
t
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


 
 
)
;


}




c
o
n
s
t
 
L
O
A
D
I
N
G
_
M
E
S
S
A
G
E
S
 
=
 
[


 
 
"
a
s
k
i
n
g
 
t
h
e
 
m
o
d
e
l
 
f
o
r
 
a
 
s
t
r
u
c
t
u
r
e
d
 
p
l
a
n
"
,


 
 
"
m
a
t
c
h
i
n
g
 
t
o
p
i
c
s
 
t
o
 
y
o
u
r
 
h
o
u
r
s
 
p
e
r
 
w
e
e
k
"
,


 
 
"
c
u
r
a
t
i
n
g
 
r
e
a
l
,
 
f
r
e
e
 
r
e
s
o
u
r
c
e
s
"
,


 
 
"
w
r
i
t
i
n
g
 
t
h
e
 
m
i
n
i
 
p
r
o
j
e
c
t
s
"
,


 
 
"
w
r
a
p
p
i
n
g
 
i
t
 
i
n
t
o
 
a
 
P
D
F
"
,


]
;


