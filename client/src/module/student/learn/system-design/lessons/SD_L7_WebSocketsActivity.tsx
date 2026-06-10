
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
 
P
A
T
T
E
R
N
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
S
h
o
r
t
 
p
o
l
l
i
n
g
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
c
l
i
e
n
t
 
a
s
k
s
 
e
v
e
r
y
 
N
 
s
e
c
o
n
d
s
"
,


 
 
 
 
p
r
o
:
 
"
T
r
i
v
i
a
l
 
t
o
 
i
m
p
l
e
m
e
n
t
.
 
S
t
a
t
e
l
e
s
s
 
s
e
r
v
e
r
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
 
l
a
t
e
n
c
y
 
(
u
p
 
t
o
 
N
)
,
 
w
a
s
t
e
f
u
l
 
w
h
e
n
 
t
h
e
r
e
'
s
 
n
o
t
h
i
n
g
 
t
o
 
s
e
n
d
.
 
M
o
s
t
 
p
o
l
l
s
 
r
e
t
u
r
n
 
e
m
p
t
y
.
"
,


 
 
 
 
e
x
:
 
"
O
l
d
 
c
h
a
t
 
a
p
p
s
,
 
s
t
a
t
u
s
 
p
a
g
e
s
.
 
N
e
a
r
l
y
 
e
x
t
i
n
c
t
 
i
n
 
m
o
d
e
r
n
 
a
p
p
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
o
n
g
 
p
o
l
l
i
n
g
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
r
e
q
u
e
s
t
 
h
e
l
d
 
o
p
e
n
 
u
n
t
i
l
 
d
a
t
a
 
a
r
r
i
v
e
s
"
,


 
 
 
 
p
r
o
:
 
"
B
e
t
t
e
r
 
l
a
t
e
n
c
y
 
t
h
a
n
 
s
h
o
r
t
 
p
o
l
l
i
n
g
.
 
W
o
r
k
s
 
t
h
r
o
u
g
h
 
p
r
o
x
i
e
s
.
 
N
o
 
s
p
e
c
i
a
l
 
p
r
o
t
o
c
o
l
.
"
,


 
 
 
 
c
o
n
:
 
"
E
a
c
h
 
c
o
n
n
e
c
t
i
o
n
 
h
o
l
d
s
 
a
 
s
e
r
v
e
r
 
t
h
r
e
a
d
/
s
o
c
k
e
t
.
 
M
a
n
y
 
u
s
e
r
s
 
=
 
m
a
n
y
 
i
d
l
e
 
h
o
l
d
s
.
 
R
e
c
o
n
n
e
c
t
 
l
a
t
e
n
c
y
 
o
n
 
e
a
c
h
 
e
v
e
n
t
.
"
,


 
 
 
 
e
x
:
 
"
E
a
r
l
i
e
r
 
F
a
c
e
b
o
o
k
 
c
h
a
t
,
 
S
l
a
c
k
 
f
a
l
l
b
a
c
k
 
w
h
e
n
 
W
e
b
S
o
c
k
e
t
s
 
f
a
i
l
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
W
e
b
S
o
c
k
e
t
s
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
p
e
r
s
i
s
t
e
n
t
 
b
i
d
i
r
e
c
t
i
o
n
a
l
 
c
o
n
n
e
c
t
i
o
n
"
,


 
 
 
 
p
r
o
:
 
"
L
o
w
e
s
t
 
l
a
t
e
n
c
y
.
 
R
e
a
l
-
t
i
m
e
 
b
i
d
i
r
e
c
t
i
o
n
a
l
.
 
O
n
e
 
c
o
n
n
e
c
t
i
o
n
 
p
e
r
 
u
s
e
r
,
 
n
o
t
 
p
e
r
 
e
v
e
n
t
.
"
,


 
 
 
 
c
o
n
:
 
"
S
t
a
t
e
f
u
l
 
s
e
r
v
e
r
 
(
s
t
i
c
k
y
 
s
e
s
s
i
o
n
s
 
o
r
 
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
)
.
 
C
o
n
n
e
c
t
i
o
n
-
c
o
u
n
t
 
s
c
a
l
i
n
g
.
 
R
e
c
o
n
n
e
c
t
 
l
o
g
i
c
 
o
n
 
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


 
 
 
 
e
x
:
 
"
S
l
a
c
k
,
 
D
i
s
c
o
r
d
,
 
W
h
a
t
s
A
p
p
 
W
e
b
,
 
r
e
a
l
-
t
i
m
e
 
m
u
l
t
i
p
l
a
y
e
r
 
g
a
m
e
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
e
r
v
e
r
-
S
e
n
t
 
E
v
e
n
t
s
 
(
S
S
E
)
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
o
n
e
-
w
a
y
 
p
u
s
h
 
f
r
o
m
 
s
e
r
v
e
r
 
t
o
 
c
l
i
e
n
t
"
,


 
 
 
 
p
r
o
:
 
"
S
i
m
p
l
e
r
 
t
h
a
n
 
W
e
b
S
o
c
k
e
t
s
.
 
W
o
r
k
s
 
o
v
e
r
 
p
l
a
i
n
 
H
T
T
P
.
 
A
u
t
o
-
r
e
c
o
n
n
e
c
t
 
b
u
i
l
t
 
i
n
.
"
,


 
 
 
 
c
o
n
:
 
"
S
e
r
v
e
r
 
→
 
c
l
i
e
n
t
 
o
n
l
y
.
 
C
a
n
'
t
 
p
u
s
h
 
f
r
o
m
 
c
l
i
e
n
t
 
w
i
t
h
o
u
t
 
a
 
s
e
p
a
r
a
t
e
 
P
O
S
T
.
"
,


 
 
 
 
e
x
:
 
"
S
t
r
i
p
e
 
w
e
b
h
o
o
k
s
 
f
a
l
l
b
a
c
k
,
 
C
h
a
t
G
P
T
 
s
t
r
e
a
m
i
n
g
 
r
e
s
p
o
n
s
e
s
,
 
n
e
w
s
 
t
i
c
k
e
r
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
F
o
u
r
 
w
a
y
s
 
t
o
 
p
u
s
h
 
u
p
d
a
t
e
s
 
t
o
 
a
 
b
r
o
w
s
e
r
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


 
 
 
 
 
 
 
 
H
T
T
P
 
i
s
 
r
e
q
u
e
s
t
/
r
e
s
p
o
n
s
e
.
 
R
e
a
l
-
t
i
m
e
 
a
p
p
s
 
n
e
e
d
 
t
h
e
 
s
e
r
v
e
r
 
t
o
 
p
u
s
h
 
d
a
t
a
 
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


 
 
 
 
 
 
 
 
w
i
t
h
o
u
t
 
b
e
i
n
g
 
a
s
k
e
d
.
 
F
o
u
r
 
p
a
t
t
e
r
n
s
 
e
v
o
l
v
e
d
,
 
e
a
c
h
 
w
i
t
h
 
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
t
e
n
c
y
/
c
o
s
t
 
t
r
a
d
e
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
8
 
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
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
P
A
T
T
E
R
N
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
4
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
p
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
p
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
0
.
9
5
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
p
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
 
p
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
p
.
t
a
g
l
i
n
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
p
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
8
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
p
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
 
p
.
c
o
l
o
r
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
 
6
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
p
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


 
 
 
 
 
 
 
 
 
 
T
H
E
 
2
0
2
6
 
D
E
F
A
U
L
T


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
F
o
r
 
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
 
b
i
d
i
r
e
c
t
i
o
n
a
l
 
f
l
o
w
s
:
 
<
b
>
W
e
b
S
o
c
k
e
t
s
<
/
b
>
.
 
F
o
r
 
o
n
e
-
w
a
y
 
s
t
r
e
a
m
s
 
f
r
o
m
 
s
e
r
v
e
r


 
 
 
 
 
 
 
 
 
 
(
n
o
t
i
f
i
c
a
t
i
o
n
s
,
 
l
i
v
e
 
c
o
u
n
t
e
r
s
,
 
A
I
 
s
t
r
e
a
m
i
n
g
)
:
 
<
b
>
S
S
E
<
/
b
>
.
 
L
o
n
g
 
p
o
l
l
i
n
g
 
i
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
f
a
l
l
b
a
c
k
 
w
h
e
n
 
n
e
i
t
h
e
r
 
i
s
 
a
v
a
i
l
a
b
l
e
 
(
c
o
r
p
o
r
a
t
e
 
p
r
o
x
i
e
s
 
t
h
a
t
 
s
t
r
i
p
 
W
S
 
u
p
g
r
a
d
e
s
)
.


 
 
 
 
 
 
 
 
 
 
S
h
o
r
t
 
p
o
l
l
i
n
g
 
i
s
 
e
s
s
e
n
t
i
a
l
l
y
 
n
e
v
e
r
 
t
h
e
 
r
i
g
h
t
 
a
n
s
w
e
r
 
i
n
 
2
0
2
6
 
e
x
c
e
p
t
 
f
o
r
 
v
e
r
y
-
l
o
w
-
f
r
e
q
u
e
n
c
y
 
s
t
a
t
u
s
 
c
h
e
c
k
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
 
t
i
m
e
l
i
n
e
s
 
u
n
d
e
r
 
t
h
e
 
s
a
m
e
 
e
v
e
n
t
 
s
t
r
e
a
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
t
r
a
t
e
g
y
 
=
 
"
s
h
o
r
t
"
 
|
 
"
l
o
n
g
"
 
|
 
"
w
s
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
 
L
a
n
e
 
{


 
 
i
d
:
 
S
t
r
a
t
e
g
y
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


}




c
o
n
s
t
 
L
A
N
E
S
:
 
L
a
n
e
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
s
h
o
r
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
S
h
o
r
t
 
p
o
l
l
i
n
g
 
·
 
p
o
l
l
 
e
v
e
r
y
 
2
s
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
,


 
 
{
 
i
d
:
 
"
l
o
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
L
o
n
g
 
p
o
l
l
i
n
g
 
·
 
r
e
q
u
e
s
t
 
h
e
l
d
 
u
n
t
i
l
 
e
v
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
 
W
A
R
N
 
}
,


 
 
{
 
i
d
:
 
"
w
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
W
e
b
S
o
c
k
e
t
 
·
 
p
e
r
s
i
s
t
e
n
t
 
c
o
n
n
e
c
t
i
o
n
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
 
}
,


]
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
 
M
a
r
k
e
r
 
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
 
0
.
.
1
0
0
 
(
%
 
o
f
 
t
i
m
e
l
i
n
e
)


 
 
k
i
n
d
:
 
"
r
e
q
u
e
s
t
"
 
|
 
"
r
e
s
p
o
n
s
e
"
 
|
 
"
e
v
e
n
t
"
 
|
 
"
w
s
-
m
s
g
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
M
E
L
I
N
E
_
S
 
=
 
1
2
;


c
o
n
s
t
 
E
V
E
N
T
S
_
S
 
=
 
[
3
,
 
5
.
5
,
 
9
]
;
 
/
/
 
s
e
c
o
n
d
s
 
w
h
e
n
 
s
e
r
v
e
r
 
h
a
s
 
d
a
t
a
 
t
o
 
s
e
n
d




f
u
n
c
t
i
o
n
 
b
u
i
l
d
M
a
r
k
e
r
s
(
s
t
r
a
t
e
g
y
:
 
S
t
r
a
t
e
g
y
)
:
 
M
a
r
k
e
r
[
]
 
{


 
 
c
o
n
s
t
 
m
a
r
k
s
:
 
M
a
r
k
e
r
[
]
 
=
 
[
]
;


 
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
s
h
o
r
t
"
)
 
{


 
 
 
 
/
/
 
P
o
l
l
 
e
v
e
r
y
 
2
s


 
 
 
 
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
 
T
I
M
E
L
I
N
E
_
S
;
 
t
 
+
=
 
2
)
 
{


 
 
 
 
 
 
m
a
r
k
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
 
(
t
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
,
 
k
i
n
d
:
 
"
r
e
q
u
e
s
t
"
 
}
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
p
T
 
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
 
+
 
0
.
1
5
,
 
T
I
M
E
L
I
N
E
_
S
)
;


 
 
 
 
 
 
m
a
r
k
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
 
(
r
e
s
p
T
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
,
 
k
i
n
d
:
 
"
r
e
s
p
o
n
s
e
"
 
}
)
;


 
 
 
 
}


 
 
}
 
e
l
s
e
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
l
o
n
g
"
)
 
{


 
 
 
 
/
/
 
L
o
n
g
-
p
o
l
l
:
 
r
e
q
u
e
s
t
 
o
p
e
n
s
,
 
h
o
l
d
s
 
u
n
t
i
l
 
n
e
x
t
 
e
v
e
n
t
,
 
r
e
t
u
r
n
s
,
 
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
 
r
e
o
p
e
n
s


 
 
 
 
l
e
t
 
c
u
r
s
o
r
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
c
u
r
s
o
r
 
<
 
T
I
M
E
L
I
N
E
_
S
)
 
{


 
 
 
 
 
 
m
a
r
k
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
 
(
c
u
r
s
o
r
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
,
 
k
i
n
d
:
 
"
r
e
q
u
e
s
t
"
 
}
)
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
E
v
e
n
t
 
=
 
E
V
E
N
T
S
_
S
.
f
i
n
d
(
(
e
)
 
=
>
 
e
 
>
 
c
u
r
s
o
r
)
 
?
?
 
T
I
M
E
L
I
N
E
_
S
;


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
p
T
 
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
n
e
x
t
E
v
e
n
t
 
+
 
0
.
0
5
,
 
T
I
M
E
L
I
N
E
_
S
)
;


 
 
 
 
 
 
m
a
r
k
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
 
(
r
e
s
p
T
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
,
 
k
i
n
d
:
 
"
r
e
s
p
o
n
s
e
"
 
}
)
;


 
 
 
 
 
 
c
u
r
s
o
r
 
=
 
r
e
s
p
T
 
+
 
0
.
1
;


 
 
 
 
}


 
 
}
 
e
l
s
e
 
{


 
 
 
 
/
/
 
W
e
b
S
o
c
k
e
t
:
 
o
n
e
 
o
p
e
n
 
a
t
 
t
=
0
,
 
t
h
e
n
 
m
e
s
s
a
g
e
s
 
a
r
r
i
v
e
 
w
h
e
n
e
v
e
r
 
e
v
e
n
t
s
 
h
a
p
p
e
n


 
 
 
 
m
a
r
k
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
 
0
,
 
k
i
n
d
:
 
"
r
e
q
u
e
s
t
"
 
}
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
E
V
E
N
T
S
_
S
)
 
{


 
 
 
 
 
 
m
a
r
k
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
 
(
e
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
,
 
k
i
n
d
:
 
"
w
s
-
m
s
g
"
 
}
)
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
m
a
r
k
s
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
T
i
m
e
l
i
n
e
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
 
1
0
0
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
 
1
0
0
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
 
T
I
M
E
L
I
N
E
_
S
 
*
 
1
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


 
 
c
o
n
s
t
 
c
o
m
p
u
t
e
S
t
a
t
s
 
=
 
(
s
:
 
S
t
r
a
t
e
g
y
,
 
t
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


 
 
 
 
c
o
n
s
t
 
a
l
l
 
=
 
b
u
i
l
d
M
a
r
k
e
r
s
(
s
)
;


 
 
 
 
c
o
n
s
t
 
s
e
e
n
 
=
 
a
l
l
.
f
i
l
t
e
r
(
(
m
)
 
=
>
 
m
.
t
 
<
=
 
t
)
;


 
 
 
 
c
o
n
s
t
 
r
e
q
s
 
=
 
s
e
e
n
.
f
i
l
t
e
r
(
(
m
)
 
=
>
 
m
.
k
i
n
d
 
=
=
=
 
"
r
e
q
u
e
s
t
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


 
 
 
 
c
o
n
s
t
 
r
e
s
p
s
 
=
 
s
e
e
n
.
f
i
l
t
e
r
(
(
m
)
 
=
>
 
m
.
k
i
n
d
 
=
=
=
 
"
r
e
s
p
o
n
s
e
"
 
|
|
 
m
.
k
i
n
d
 
=
=
=
 
"
w
s
-
m
s
g
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


 
 
 
 
/
/
 
C
o
m
p
u
t
e
 
a
v
e
r
a
g
e
 
l
a
t
e
n
c
y
 
f
r
o
m
 
e
v
e
n
t
 
t
o
 
d
e
l
i
v
e
r
y


 
 
 
 
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
 
=
 
E
V
E
N
T
S
_
S
;


 
 
 
 
c
o
n
s
t
 
l
a
t
e
n
c
i
e
s
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


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
v
e
n
t
s
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
P
c
t
 
=
 
(
e
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
;


 
 
 
 
 
 
i
f
 
(
e
P
c
t
 
>
 
t
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
c
o
n
s
t
 
d
e
l
i
v
e
r
y
 
=
 
a
l
l
.
f
i
n
d
(
(
m
)
 
=
>
 
(
m
.
k
i
n
d
 
=
=
=
 
"
r
e
s
p
o
n
s
e
"
 
|
|
 
m
.
k
i
n
d
 
=
=
=
 
"
w
s
-
m
s
g
"
)
 
&
&
 
m
.
t
 
>
=
 
e
P
c
t
)
;


 
 
 
 
 
 
i
f
 
(
d
e
l
i
v
e
r
y
)
 
l
a
t
e
n
c
i
e
s
.
p
u
s
h
(
(
(
d
e
l
i
v
e
r
y
.
t
 
-
 
e
P
c
t
)
 
/
 
1
0
0
)
 
*
 
T
I
M
E
L
I
N
E
_
S
 
*
 
1
0
0
0
)
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
a
v
g
L
a
t
e
n
c
y
 
=
 
l
a
t
e
n
c
i
e
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
 
?
 
0
 
:
 
l
a
t
e
n
c
i
e
s
.
r
e
d
u
c
e
(
(
a
,
 
b
)
 
=
>
 
a
 
+
 
b
,
 
0
)
 
/
 
l
a
t
e
n
c
i
e
s
.
l
e
n
g
t
h
;


 
 
 
 
r
e
t
u
r
n
 
{
 
r
e
q
s
,
 
r
e
s
p
s
,
 
a
v
g
L
a
t
e
n
c
y
 
}
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
T
h
r
e
e
 
p
a
t
t
e
r
n
s
.
 
S
a
m
e
 
e
v
e
n
t
 
s
t
r
e
a
m
.
 
W
a
t
c
h
 
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
 
c
o
s
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


 
 
 
 
 
 
 
 
S
e
r
v
e
r
 
h
a
s
 
d
a
t
a
 
t
o
 
p
u
s
h
 
a
t
 
t
=
3
s
,
 
t
=
5
.
5
s
,
 
a
n
d
 
t
=
9
s
.
 
E
a
c
h
 
l
a
n
e
 
s
h
o
w
s
 
h
o
w
 
t
h
a
t
 
p
a
t
t
e
r
n


 
 
 
 
 
 
 
 
d
e
l
i
v
e
r
s
.
 
C
o
u
n
t
e
r
s
 
t
r
a
c
k
 
r
e
q
u
e
s
t
s
 
s
e
n
t
 
a
n
d
 
a
v
e
r
a
g
e
 
e
n
d
-
t
o
-
e
n
d
 
l
a
t
e
n
c
y
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
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
{
L
A
N
E
S
.
m
a
p
(
(
l
a
n
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
 
m
a
r
k
e
r
s
 
=
 
b
u
i
l
d
M
a
r
k
e
r
s
(
l
a
n
e
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
 
s
t
a
t
s
 
=
 
c
o
m
p
u
t
e
S
t
a
t
s
(
l
a
n
e
.
i
d
,
 
t
N
o
w
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
 
k
e
y
=
{
l
a
n
e
.
i
d
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
B
o
t
t
o
m
:
 
1
6
 
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
 
l
a
n
e
.
c
o
l
o
r
 
}
}
>
{
l
a
n
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
s
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
 
l
a
n
e
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
s
t
a
t
s
.
r
e
q
s
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
·
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
v
g
 
l
a
t
e
n
c
y
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
 
s
t
a
t
s
.
a
v
g
L
a
t
e
n
c
y
 
>
 
1
0
0
0
 
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
s
t
a
t
s
.
a
v
g
L
a
t
e
n
c
y
.
t
o
F
i
x
e
d
(
0
)
}
m
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
 
3
6
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
l
a
n
e
.
c
o
l
o
r
}
1
0
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
 
6
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
l
a
n
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
v
e
n
t
 
m
a
r
k
e
r
s
 
(
s
e
r
v
e
r
 
h
a
s
 
d
a
t
a
)
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
E
V
E
N
T
S
_
S
.
m
a
p
(
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
 
p
c
t
 
=
 
(
e
 
/
 
T
I
M
E
L
I
N
E
_
S
)
 
*
 
1
0
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
c
t
 
>
 
t
N
o
w
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
`
e
v
t
-
$
{
e
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
p
c
t
}
%
`
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
 
W
A
R
N
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
`
0
 
0
 
6
p
x
 
$
{
W
A
R
N
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
 
r
e
q
u
e
s
t
 
/
 
r
e
s
p
o
n
s
e
 
m
a
r
k
e
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
a
r
k
e
r
s
.
m
a
p
(
(
m
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
.
t
 
>
 
t
N
o
w
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
.
k
i
n
d
 
=
=
=
 
"
r
e
q
u
e
s
t
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
4
 
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
m
.
t
}
%
`
,
 
t
o
p
:
 
4
,
 
t
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
t
r
a
n
s
l
a
t
e
X
(
-
5
0
%
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
 
c
o
l
o
r
:
 
l
a
n
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
↑


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
-
4
 
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
m
.
t
}
%
`
,
 
b
o
t
t
o
m
:
 
4
,
 
t
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
t
r
a
n
s
l
a
t
e
X
(
-
5
0
%
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
 
c
o
l
o
r
:
 
l
a
n
e
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
m
.
k
i
n
d
 
=
=
=
 
"
w
s
-
m
s
g
"
 
?
 
"
●
"
 
:
 
"
↓
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
c
u
r
r
e
n
t
 
t
i
m
e
 
c
u
r
s
o
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
t
N
o
w
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
 
1
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
 
l
a
n
e
.
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
4
 
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
 
1
0
0
 
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
(
t
N
o
w
 
/
 
1
0
0
)
 
*
 
T
I
M
E
L
I
N
E
_
S
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
 
/
 
{
T
I
M
E
L
I
N
E
_
S
}
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


 
 
 
 
 
 
 
 
 
 
 
 
L
E
G
E
N
D


 
 
 
 
 
 
 
 
 
 
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
│
<
/
s
p
a
n
>
 
s
e
r
v
e
r
 
e
v
e
n
t
 
&
n
b
s
p
;


 
 
 
 
 
 
 
 
 
 
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
↑
<
/
s
p
a
n
>
 
c
l
i
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
 
&
n
b
s
p
;


 
 
 
 
 
 
 
 
 
 
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
↓
<
/
s
p
a
n
>
 
s
e
r
v
e
r
 
r
e
s
p
o
n
s
e
 
&
n
b
s
p
;


 
 
 
 
 
 
 
 
 
 
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
●
<
/
s
p
a
n
>
 
W
e
b
S
o
c
k
e
t
 
m
e
s
s
a
g
e


 
 
 
 
 
 
 
 
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
 
S
c
a
l
i
n
g
 
c
o
n
s
i
d
e
r
a
t
i
o
n
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
 
S
C
A
L
E
 
=
 
[


 
 
{
 
k
:
 
"
C
o
n
n
e
c
t
i
o
n
-
c
o
u
n
t
 
l
i
m
i
t
s
"
,
 
v
:
 
"
A
 
s
i
n
g
l
e
 
L
i
n
u
x
 
b
o
x
 
t
y
p
i
c
a
l
l
y
 
t
o
p
s
 
o
u
t
 
a
r
o
u
n
d
 
5
0
k
-
1
0
0
k
 
c
o
n
c
u
r
r
e
n
t
 
W
e
b
S
o
c
k
e
t
s
.
 
T
o
 
s
e
r
v
e
 
5
M
 
u
s
e
r
s
,
 
y
o
u
 
n
e
e
d
 
5
0
+
 
c
o
n
n
e
c
t
i
o
n
 
s
e
r
v
e
r
s
 
b
e
h
i
n
d
 
a
 
s
t
i
c
k
y
 
l
o
a
d
 
b
a
l
a
n
c
e
r
.
"
 
}
,


 
 
{
 
k
:
 
"
S
t
i
c
k
y
 
s
e
s
s
i
o
n
s
"
,
 
v
:
 
"
W
e
b
S
o
c
k
e
t
s
 
a
r
e
 
s
t
a
t
e
f
u
l
.
 
T
h
e
 
L
B
 
m
u
s
t
 
r
o
u
t
e
 
r
e
c
o
n
n
e
c
t
s
 
t
o
 
t
h
e
 
s
a
m
e
 
s
e
r
v
e
r
 
(
o
r
 
u
s
e
 
a
 
s
h
a
r
e
d
 
p
u
b
/
s
u
b
 
l
i
k
e
 
R
e
d
i
s
 
t
o
 
f
a
n
 
o
u
t
 
a
c
r
o
s
s
 
s
e
r
v
e
r
s
)
.
"
 
}
,


 
 
{
 
k
:
 
"
H
e
a
r
t
b
e
a
t
s
 
/
 
p
i
n
g
-
p
o
n
g
"
,
 
v
:
 
"
T
C
P
 
d
o
e
s
n
'
t
 
t
e
l
l
 
y
o
u
 
w
h
e
n
 
t
h
e
 
u
s
e
r
 
c
l
o
s
e
s
 
t
h
e
 
l
a
p
t
o
p
 
l
i
d
.
 
S
e
n
d
 
p
i
n
g
s
 
e
v
e
r
y
 
3
0
s
;
 
c
l
o
s
e
 
t
h
e
 
c
o
n
n
e
c
t
i
o
n
 
o
n
 
m
i
s
s
e
d
 
p
o
n
g
s
 
t
o
 
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
.
"
 
}
,


 
 
{
 
k
:
 
"
R
e
c
o
n
n
e
c
t
i
o
n
 
l
o
g
i
c
"
,
 
v
:
 
"
E
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
 
w
i
t
h
 
j
i
t
t
e
r
.
 
W
h
e
n
 
1
0
0
k
 
c
l
i
e
n
t
s
 
r
e
c
o
n
n
e
c
t
 
a
f
t
e
r
 
a
 
b
r
i
e
f
 
o
u
t
a
g
e
,
 
t
h
e
 
L
B
 
n
e
e
d
s
 
t
o
 
a
b
s
o
r
b
 
a
 
t
h
u
n
d
e
r
i
n
g
 
h
e
r
d
.
"
 
}
,


 
 
{
 
k
:
 
"
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
"
,
 
v
:
 
"
S
l
o
w
 
c
l
i
e
n
t
 
=
 
W
e
b
S
o
c
k
e
t
 
b
u
f
f
e
r
 
f
i
l
l
s
 
o
n
 
t
h
e
 
s
e
r
v
e
r
.
 
D
r
o
p
 
o
l
d
e
s
t
,
 
c
l
o
s
e
 
c
o
n
n
e
c
t
i
o
n
,
 
o
r
 
a
p
p
l
y
 
p
e
r
-
c
l
i
e
n
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
.
 
W
i
t
h
o
u
t
 
i
t
,
 
o
n
e
 
b
a
d
 
c
l
i
e
n
t
 
c
a
n
 
O
O
M
 
t
h
e
 
s
e
r
v
e
r
.
"
 
}
,


 
 
{
 
k
:
 
"
A
u
t
h
 
&
 
a
u
t
h
o
r
i
z
a
t
i
o
n
"
,
 
v
:
 
"
S
t
a
n
d
a
r
d
 
p
a
t
t
e
r
n
:
 
H
T
T
P
 
a
u
t
h
e
n
t
i
c
a
t
e
s
,
 
r
e
t
u
r
n
s
 
a
 
s
h
o
r
t
-
l
i
v
e
d
 
t
o
k
e
n
.
 
T
o
k
e
n
 
s
e
n
t
 
i
n
 
t
h
e
 
W
S
 
h
a
n
d
s
h
a
k
e
;
 
s
e
r
v
e
r
 
v
e
r
i
f
i
e
s
 
a
n
d
 
p
i
n
s
 
u
s
e
r
-
i
d
 
t
o
 
t
h
e
 
c
o
n
n
e
c
t
i
o
n
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
 
S
c
a
l
i
n
g
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
S
c
a
l
i
n
g
 
W
e
b
S
o
c
k
e
t
s
 
t
o
 
m
i
l
l
i
o
n
s
 
o
f
 
u
s
e
r
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


 
 
 
 
 
 
 
 
W
e
b
S
o
c
k
e
t
s
 
a
r
e
 
d
r
a
m
a
t
i
c
a
l
l
y
 
m
o
r
e
 
e
f
f
i
c
i
e
n
t
 
p
e
r
 
m
e
s
s
a
g
e
 
t
h
a
n
 
H
T
T
P
 
p
o
l
l
i
n
g
,
 
b
u
t
 
e
a
c
h
 
o
p
e
n


 
 
 
 
 
 
 
 
c
o
n
n
e
c
t
i
o
n
 
s
t
i
l
l
 
c
o
s
t
s
 
a
 
f
i
l
e
 
d
e
s
c
r
i
p
t
o
r
 
a
n
d
 
s
o
m
e
 
R
A
M
.
 
S
i
x
 
t
h
i
n
g
s
 
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
 
s
y
s
t
e
m
s
 
g
e
t


 
 
 
 
 
 
 
 
r
i
g
h
t
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
6
 
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
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
C
A
L
E
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
s
.
k
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
k
.
t
o
U
p
p
e
r
C
a
s
e
(
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
s
.
v
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
7
_
W
e
b
S
o
c
k
e
t
s
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
l
a
n
e
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
T
h
r
e
e
 
T
i
m
e
l
i
n
e
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
T
h
r
e
e
T
i
m
e
l
i
n
e
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
s
c
a
l
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
S
c
a
l
i
n
g
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
S
c
a
l
i
n
g
 
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
W
e
b
S
o
c
k
e
t
s
 
a
r
e
 
i
d
e
a
l
 
f
o
r
 
c
h
a
t
.
 
W
h
y
 
d
o
 
t
h
e
y
 
g
e
n
e
r
a
l
l
y
 
b
e
a
t
 
l
o
n
g
 
p
o
l
l
i
n
g
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
W
e
b
S
o
c
k
e
t
s
 
c
o
m
p
r
e
s
s
 
m
e
s
s
a
g
e
s
.
"
,


 
 
 
 
 
 
 
 
"
O
n
e
 
p
e
r
s
i
s
t
e
n
t
 
c
o
n
n
e
c
t
i
o
n
 
p
e
r
 
u
s
e
r
,
 
n
o
t
 
o
n
e
 
p
e
r
 
m
e
s
s
a
g
e
.
 
L
o
w
e
r
 
p
e
r
-
e
v
e
n
t
 
l
a
t
e
n
c
y
,
 
f
e
w
e
r
 
r
e
q
u
e
s
t
s
,
 
l
e
s
s
 
s
e
r
v
e
r
 
o
v
e
r
h
e
a
d
.
"
,


 
 
 
 
 
 
 
 
"
W
e
b
S
o
c
k
e
t
s
 
a
r
e
 
e
n
c
r
y
p
t
e
d
;
 
l
o
n
g
 
p
o
l
l
i
n
g
 
i
s
n
'
t
.
"
,


 
 
 
 
 
 
 
 
"
L
o
n
g
 
p
o
l
l
i
n
g
 
i
s
 
d
e
p
r
e
c
a
t
e
d
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
L
o
n
g
 
p
o
l
l
i
n
g
 
r
e
o
p
e
n
s
 
a
 
r
e
q
u
e
s
t
 
f
o
r
 
e
v
e
r
y
 
e
v
e
n
t
.
 
W
e
b
S
o
c
k
e
t
s
 
s
t
a
y
 
o
p
e
n
.
 
F
o
r
 
a
 
b
u
s
y
 
c
h
a
t
 
w
i
t
h
 
o
n
e
 
e
v
e
n
t
/
s
e
c
o
n
d
,
 
l
o
n
g
 
p
o
l
l
i
n
g
 
=
 
6
0
 
c
o
n
n
e
c
t
i
o
n
s
/
m
i
n
/
u
s
e
r
;
 
W
e
b
S
o
c
k
e
t
 
=
 
1
 
c
o
n
n
e
c
t
i
o
n
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
C
h
a
t
G
P
T
 
s
t
r
e
a
m
s
 
i
t
s
 
r
e
s
p
o
n
s
e
 
t
o
k
e
n
-
b
y
-
t
o
k
e
n
.
 
B
e
s
t
 
f
i
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
S
h
o
r
t
 
p
o
l
l
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
L
o
n
g
 
p
o
l
l
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
S
e
r
v
e
r
-
S
e
n
t
 
E
v
e
n
t
s
 
(
S
S
E
)
 
—
 
o
n
e
-
w
a
y
 
p
u
s
h
 
f
r
o
m
 
s
e
r
v
e
r
,
 
s
i
m
p
l
e
r
 
t
h
a
n
 
W
e
b
S
o
c
k
e
t
s
,
 
w
o
r
k
s
 
o
v
e
r
 
p
l
a
i
n
 
H
T
T
P
.
"
,


 
 
 
 
 
 
 
 
"
D
i
r
e
c
t
 
f
i
l
e
 
w
r
i
t
e
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
 
2
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
S
t
r
e
a
m
i
n
g
 
a
 
s
e
r
v
e
r
-
g
e
n
e
r
a
t
e
d
 
r
e
s
p
o
n
s
e
 
i
s
 
o
n
e
-
w
a
y
;
 
S
S
E
 
h
a
n
d
l
e
s
 
i
t
 
p
e
r
f
e
c
t
l
y
 
w
i
t
h
 
a
u
t
o
-
r
e
c
o
n
n
e
c
t
 
a
n
d
 
s
t
a
n
d
a
r
d
 
H
T
T
P
.
 
W
e
b
S
o
c
k
e
t
s
 
w
o
r
k
 
t
o
o
 
b
u
t
 
a
r
e
 
o
v
e
r
k
i
l
l
 
s
i
n
c
e
 
t
h
e
 
c
l
i
e
n
t
 
d
o
e
s
n
'
t
 
n
e
e
d
 
t
o
 
p
u
s
h
 
m
i
d
-
s
t
r
e
a
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
 
s
c
a
l
e
 
W
e
b
S
o
c
k
e
t
 
u
s
e
r
s
 
f
r
o
m
 
1
0
k
 
t
o
 
5
M
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
 
F
I
R
S
T
 
i
n
f
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
 
c
h
a
n
g
e
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
 
C
P
U
s
.
"
,


 
 
 
 
 
 
 
 
"
M
u
l
t
i
p
l
e
 
c
o
n
n
e
c
t
i
o
n
 
s
e
r
v
e
r
s
 
b
e
h
i
n
d
 
a
 
s
t
i
c
k
y
 
l
o
a
d
 
b
a
l
a
n
c
e
r
;
 
p
e
r
-
s
e
r
v
e
r
 
l
i
m
i
t
 
o
f
 
~
1
0
0
k
 
W
S
 
c
o
n
n
e
c
t
i
o
n
s
.
"
,


 
 
 
 
 
 
 
 
"
M
o
r
e
 
d
i
s
k
s
.
"
,


 
 
 
 
 
 
 
 
"
S
w
i
t
c
h
 
t
o
 
s
h
o
r
t
 
p
o
l
l
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
E
a
c
h
 
s
e
r
v
e
r
 
h
i
t
s
 
a
 
c
o
n
n
e
c
t
i
o
n
-
c
o
u
n
t
 
c
e
i
l
i
n
g
 
w
e
l
l
 
b
e
f
o
r
e
 
C
P
U
/
d
i
s
k
 
b
e
c
o
m
e
 
t
h
e
 
i
s
s
u
e
.
 
H
o
r
i
z
o
n
t
a
l
 
s
c
a
l
e
-
o
u
t
 
w
i
t
h
 
s
t
i
c
k
y
 
L
B
 
r
o
u
t
i
n
g
 
i
s
 
t
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
 
a
n
s
w
e
r
.
 
I
n
t
e
r
-
s
e
r
v
e
r
 
p
u
b
/
s
u
b
 
(
R
e
d
i
s
)
 
h
a
n
d
l
e
s
 
c
r
o
s
s
-
s
e
r
v
e
r
 
f
a
n
-
o
u
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
W
h
y
 
d
o
 
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
 
W
e
b
S
o
c
k
e
t
 
s
e
r
v
e
r
s
 
s
e
n
d
 
h
e
a
r
t
b
e
a
t
 
p
i
n
g
s
 
e
v
e
r
y
 
3
0
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
D
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
T
C
P
 
d
o
e
s
n
'
t
 
r
e
l
i
a
b
l
y
 
d
e
t
e
c
t
 
a
 
c
l
i
e
n
t
 
t
h
a
t
 
d
i
s
a
p
p
e
a
r
e
d
 
(
c
l
o
s
e
d
 
l
a
p
t
o
p
,
 
d
e
a
d
 
W
i
F
i
)
.
 
P
i
n
g
s
 
+
 
m
i
s
s
e
d
-
p
o
n
g
 
t
i
m
e
o
u
t
 
f
r
e
e
 
s
e
r
v
e
r
 
r
e
s
o
u
r
c
e
s
 
f
o
r
 
s
t
a
l
e
 
c
o
n
n
e
c
t
i
o
n
s
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
c
o
m
p
r
e
s
s
 
d
a
t
a
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
r
o
t
a
t
e
 
k
e
y
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
W
i
t
h
o
u
t
 
h
e
a
r
t
b
e
a
t
s
,
 
a
 
s
e
r
v
e
r
 
c
a
n
 
h
o
l
d
 
t
h
o
u
s
a
n
d
s
 
o
f
 
c
o
n
n
e
c
t
i
o
n
s
 
t
o
 
l
o
n
g
-
g
o
n
e
 
c
l
i
e
n
t
s
,
 
e
a
t
i
n
g
 
f
i
l
e
 
d
e
s
c
r
i
p
t
o
r
s
.
 
P
e
r
i
o
d
i
c
 
p
i
n
g
s
 
+
 
a
 
s
t
r
i
c
t
 
p
o
n
g
 
t
i
m
e
o
u
t
 
c
l
e
a
n
l
y
 
e
v
i
c
t
 
t
h
e
m
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
W
e
b
S
o
c
k
e
t
s
 
v
s
 
L
o
n
g
 
P
o
l
l
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
7
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
4
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
u
s
h
 
r
e
a
l
-
t
i
m
e
 
u
p
d
a
t
e
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
 
a
n
y
 
c
h
a
t
 
/
 
l
i
v
e
 
s
y
s
t
e
m
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




