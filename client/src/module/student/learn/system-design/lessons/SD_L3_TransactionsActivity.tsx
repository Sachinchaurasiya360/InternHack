
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
 
S
l
i
d
e
r
s
 
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
C
I
D
 
=
 
[


 
 
{
 
k
:
 
"
A
 
·
 
A
t
o
m
i
c
i
t
y
"
,
 
v
:
 
"
A
l
l
-
o
r
-
n
o
t
h
i
n
g
.
 
I
f
 
a
n
y
 
s
t
e
p
 
f
a
i
l
s
,
 
t
h
e
 
w
h
o
l
e
 
t
r
a
n
s
a
c
t
i
o
n
 
r
o
l
l
s
 
b
a
c
k
.
 
N
o
 
h
a
l
f
-
c
o
m
m
i
t
t
e
d
 
s
t
a
t
e
.
"
 
}
,


 
 
{
 
k
:
 
"
C
 
·
 
C
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
"
,
 
v
:
 
"
C
o
n
s
t
r
a
i
n
t
s
 
(
f
o
r
e
i
g
n
 
k
e
y
s
,
 
N
O
T
 
N
U
L
L
,
 
C
H
E
C
K
)
 
h
o
l
d
 
b
e
f
o
r
e
 
A
N
D
 
a
f
t
e
r
 
t
h
e
 
t
r
a
n
s
a
c
t
i
o
n
.
 
T
h
e
 
D
B
 
n
e
v
e
r
 
s
e
e
s
 
a
n
 
i
n
v
a
l
i
d
 
s
t
a
t
e
.
"
 
}
,


 
 
{
 
k
:
 
"
I
 
·
 
I
s
o
l
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
C
o
n
c
u
r
r
e
n
t
 
t
r
a
n
s
a
c
t
i
o
n
s
 
c
a
n
'
t
 
s
e
e
 
e
a
c
h
 
o
t
h
e
r
'
s
 
u
n
c
o
m
m
i
t
t
e
d
 
i
n
t
e
r
m
e
d
i
a
t
e
 
s
t
a
t
e
.
 
T
h
e
 
l
e
v
e
l
 
(
R
E
A
D
 
C
O
M
M
I
T
T
E
D
,
 
R
E
P
E
A
T
A
B
L
E
 
R
E
A
D
,
 
S
E
R
I
A
L
I
Z
A
B
L
E
)
 
s
e
t
s
 
h
o
w
 
s
t
r
i
c
t
.
"
 
}
,


 
 
{
 
k
:
 
"
D
 
·
 
D
u
r
a
b
i
l
i
t
y
"
,
 
v
:
 
"
O
n
c
e
 
c
o
m
m
i
t
t
e
d
,
 
t
h
e
 
d
a
t
a
 
s
u
r
v
i
v
e
s
 
c
r
a
s
h
e
s
.
 
W
A
L
 
f
l
u
s
h
 
t
o
 
d
i
s
k
 
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
 
s
u
c
c
e
s
s
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
a
t
 
k
e
e
p
 
y
o
u
r
 
d
a
t
a
 
s
a
n
e
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
 
<
b
>
t
r
a
n
s
a
c
t
i
o
n
<
/
b
>
 
w
r
a
p
s
 
s
e
v
e
r
a
l
 
S
Q
L
 
s
t
a
t
e
m
e
n
t
s
 
s
o
 
t
h
e
y
 
e
x
e
c
u
t
e
 
a
s
 
o
n
e
 
l
o
g
i
c
a
l
 
u
n
i
t
.


 
 
 
 
 
 
 
 
A
C
I
D
 
i
s
 
t
h
e
 
f
o
u
r
-
l
e
t
t
e
r
 
p
r
o
m
i
s
e
 
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
 
m
a
k
e
s
 
a
b
o
u
t
 
t
h
a
t
 
u
n
i
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
A
C
I
D
.
m
a
p
(
(
c
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
c
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
 
g
a
p
:
 
1
4
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
f
l
e
x
-
s
t
a
r
t
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
 
w
i
d
t
h
:
 
4
4
,
 
h
e
i
g
h
t
:
 
4
4
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
S
D
}
1
8
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
c
e
n
t
e
r
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
1
.
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
 
f
l
e
x
S
h
r
i
n
k
:
 
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
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
2
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
 
6
 
}
}
>
{
c
.
k
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
c
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


 
 
 
 
 
 
 
 
 
 
A
 
b
a
n
k
 
t
r
a
n
s
f
e
r
:
 
<
c
o
d
e
 
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
 
}
}
>
B
E
G
I
N
;
 
d
e
b
i
t
 
A
;
 
c
r
e
d
i
t
 
B
;
 
C
O
M
M
I
T
;
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
{
"
 
"
}
I
f
 
t
h
e
 
c
r
e
d
i
t
 
f
a
i
l
s
,
 
a
t
o
m
i
c
i
t
y
 
r
o
l
l
s
 
b
a
c
k
 
t
h
e
 
d
e
b
i
t
.
 
I
f
 
t
w
o
 
t
r
a
n
s
f
e
r
s
 
r
u
n
 
a
t
 
o
n
c
e
,


 
 
 
 
 
 
 
 
 
 
i
s
o
l
a
t
i
o
n
 
p
r
e
v
e
n
t
s
 
A
 
f
r
o
m
 
b
e
i
n
g
 
d
e
b
i
t
e
d
 
t
w
i
c
e
.
 
A
f
t
e
r
 
c
o
m
m
i
t
,
 
d
u
r
a
b
i
l
i
t
y
 
e
n
s
u
r
e
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
b
a
l
a
n
c
e
 
s
u
r
v
i
v
e
s
 
a
 
c
r
a
s
h
.
 
P
o
s
t
g
r
e
s
,
 
M
y
S
Q
L
 
I
n
n
o
D
B
,
 
S
Q
L
 
S
e
r
v
e
r
,
 
O
r
a
c
l
e
 
a
l
l
 
g
i
v
e
 
y
o
u
 
A
C
I
D
.


 
 
 
 
 
 
 
 
 
 
M
o
s
t
 
N
o
S
Q
L
 
d
a
t
a
b
a
s
e
s
 
g
i
v
e
 
y
o
u
 
A
C
I
D
 
p
e
r
 
d
o
c
u
m
e
n
t
/
r
o
w
 
b
u
t
 
l
i
m
i
t
e
d
 
o
r
 
n
o
 
m
u
l
t
i
-
d
o
c
u
m
e
n
t


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
a
c
t
i
o
n
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
 
C
o
n
c
u
r
r
e
n
t
 
t
r
a
n
s
a
c
t
i
o
n
 
t
i
m
e
l
i
n
e
 
+
 
i
s
o
l
a
t
i
o
n
 
s
l
i
d
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
 
I
s
o
l
a
t
i
o
n
L
e
v
e
l
 
=
 
"
r
e
a
d
-
u
n
c
o
m
m
i
t
t
e
d
"
 
|
 
"
r
e
a
d
-
c
o
m
m
i
t
t
e
d
"
 
|
 
"
r
e
p
e
a
t
a
b
l
e
-
r
e
a
d
"
 
|
 
"
s
e
r
i
a
l
i
z
a
b
l
e
"
;




c
o
n
s
t
 
L
E
V
E
L
S
:
 
{
 
i
d
:
 
I
s
o
l
a
t
i
o
n
L
e
v
e
l
;
 
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
 
a
l
l
o
w
s
:
 
{
 
d
i
r
t
y
:
 
b
o
o
l
e
a
n
;
 
n
o
n
R
e
p
e
a
t
a
b
l
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
 
p
h
a
n
t
o
m
:
 
b
o
o
l
e
a
n
 
}
 
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
r
e
a
d
-
u
n
c
o
m
m
i
t
t
e
d
"
,
 
n
a
m
e
:
 
"
R
e
a
d
 
U
n
c
o
m
m
i
t
t
e
d
"
,
 
a
l
l
o
w
s
:
 
{
 
d
i
r
t
y
:
 
t
r
u
e
,
 
n
o
n
R
e
p
e
a
t
a
b
l
e
:
 
t
r
u
e
,
 
p
h
a
n
t
o
m
:
 
t
r
u
e
 
}
 
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
-
c
o
m
m
i
t
t
e
d
"
,
 
n
a
m
e
:
 
"
R
e
a
d
 
C
o
m
m
i
t
t
e
d
"
,
 
a
l
l
o
w
s
:
 
{
 
d
i
r
t
y
:
 
f
a
l
s
e
,
 
n
o
n
R
e
p
e
a
t
a
b
l
e
:
 
t
r
u
e
,
 
p
h
a
n
t
o
m
:
 
t
r
u
e
 
}
 
}
,


 
 
{
 
i
d
:
 
"
r
e
p
e
a
t
a
b
l
e
-
r
e
a
d
"
,
 
n
a
m
e
:
 
"
R
e
p
e
a
t
a
b
l
e
 
R
e
a
d
"
,
 
a
l
l
o
w
s
:
 
{
 
d
i
r
t
y
:
 
f
a
l
s
e
,
 
n
o
n
R
e
p
e
a
t
a
b
l
e
:
 
f
a
l
s
e
,
 
p
h
a
n
t
o
m
:
 
t
r
u
e
 
}
 
}
,


 
 
{
 
i
d
:
 
"
s
e
r
i
a
l
i
z
a
b
l
e
"
,
 
n
a
m
e
:
 
"
S
e
r
i
a
l
i
z
a
b
l
e
"
,
 
a
l
l
o
w
s
:
 
{
 
d
i
r
t
y
:
 
f
a
l
s
e
,
 
n
o
n
R
e
p
e
a
t
a
b
l
e
:
 
f
a
l
s
e
,
 
p
h
a
n
t
o
m
:
 
f
a
l
s
e
 
}
 
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
 
I
s
o
l
a
t
i
o
n
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
l
e
v
e
l
,
 
s
e
t
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
I
s
o
l
a
t
i
o
n
L
e
v
e
l
>
(
"
r
e
a
d
-
c
o
m
m
i
t
t
e
d
"
)
;


 
 
c
o
n
s
t
 
c
u
r
 
=
 
L
E
V
E
L
S
.
f
i
n
d
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
v
e
l
)
!
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
l
i
d
e
 
t
h
e
 
i
s
o
l
a
t
i
o
n
 
l
e
v
e
l
.
 
W
a
t
c
h
 
a
n
o
m
a
l
i
e
s
 
a
p
p
e
a
r
 
a
n
d
 
v
a
n
i
s
h
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


 
 
 
 
 
 
 
 
T
w
o
 
t
r
a
n
s
a
c
t
i
o
n
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
.
 
P
i
c
k
 
a
n
 
i
s
o
l
a
t
i
o
n
 
l
e
v
e
l
 
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
i
c
h
 
r
e
a
d


 
 
 
 
 
 
 
 
a
n
o
m
a
l
i
e
s
 
a
r
e
 
a
l
l
o
w
e
d
 
u
n
d
e
r
 
t
h
a
t
 
l
e
v
e
l
.
 
A
n
o
m
a
l
i
e
s
 
=
 
r
e
a
l
 
b
u
g
s
 
y
o
u
&
r
s
q
u
o
;
d
 
s
e
e
 
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


 
 
 
 
 
 
 
 
i
f
 
y
o
u
 
p
i
c
k
e
d
 
t
o
o
 
l
o
o
s
e
 
a
 
l
e
v
e
l
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
S
l
i
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
g
-
s
u
b
t
l
e
)
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
2
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
6
p
x
 
1
8
p
x
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
 
1
8
 
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
 
1
2
 
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
 
N
E
U
T
R
A
L
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
 
}
}
>
L
O
O
S
E
R
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
c
u
r
.
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
 
N
E
U
T
R
A
L
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
 
}
}
>
S
T
R
I
C
T
E
R
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
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
4
,
 
1
f
r
)
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


 
 
 
 
 
 
 
 
 
 
{
L
E
V
E
L
S
.
m
a
p
(
(
l
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
 
l
e
v
e
l
 
=
=
=
 
l
.
i
d
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
l
.
i
d
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
L
e
v
e
l
(
l
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
4
e
m
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
 
2
 
}
}
>
L
{
i
 
+
 
1
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
n
a
m
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
 
a
n
o
m
a
l
y
 
d
e
m
o
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
"
>


 
 
 
 
 
 
 
 
<
A
n
o
m
a
l
y
C
a
r
d


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
i
r
t
y
 
R
e
a
d
"


 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
=
{
c
u
r
.
a
l
l
o
w
s
.
d
i
r
t
y
}


 
 
 
 
 
 
 
 
 
 
d
e
s
c
=
"
T
1
 
w
r
i
t
e
s
 
u
n
c
o
m
m
i
t
t
e
d
 
v
a
l
u
e
.
 
T
2
 
r
e
a
d
s
 
i
t
.
 
T
1
 
t
h
e
n
 
r
o
l
l
s
 
b
a
c
k
.
 
T
2
 
s
a
w
 
a
 
v
a
l
u
e
 
t
h
a
t
 
n
e
v
e
r
 
e
x
i
s
t
e
d
.
"


 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
1
"
,
 
o
p
:
 
"
U
P
D
A
T
E
 
a
c
c
o
u
n
t
s
 
S
E
T
 
b
a
l
a
n
c
e
 
=
 
0
 
W
H
E
R
E
 
i
d
 
=
 
1
"
,
 
t
s
:
 
1
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
2
"
,
 
o
p
:
 
"
S
E
L
E
C
T
 
b
a
l
a
n
c
e
 
W
H
E
R
E
 
i
d
 
=
 
1
 
→
 
0
 
 
(
D
I
R
T
Y
)
"
,
 
t
s
:
 
2
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
1
"
,
 
o
p
:
 
"
R
O
L
L
B
A
C
K
"
,
 
t
s
:
 
3
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
a
n
o
m
a
l
y
A
t
=
{
1
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
A
n
o
m
a
l
y
C
a
r
d


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
o
n
-
R
e
p
e
a
t
a
b
l
e
 
R
e
a
d
"


 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
=
{
c
u
r
.
a
l
l
o
w
s
.
n
o
n
R
e
p
e
a
t
a
b
l
e
}


 
 
 
 
 
 
 
 
 
 
d
e
s
c
=
"
T
1
 
r
e
a
d
s
 
X
 
=
 
1
0
0
.
 
T
2
 
c
o
m
m
i
t
s
 
X
 
=
 
2
0
0
.
 
T
1
 
r
e
a
d
s
 
X
 
=
 
2
0
0
.
 
S
a
m
e
 
q
u
e
r
y
,
 
t
w
o
 
d
i
f
f
e
r
e
n
t
 
a
n
s
w
e
r
s
 
w
i
t
h
i
n
 
o
n
e
 
t
r
a
n
s
a
c
t
i
o
n
.
"


 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
1
"
,
 
o
p
:
 
"
S
E
L
E
C
T
 
b
a
l
a
n
c
e
 
W
H
E
R
E
 
i
d
 
=
 
1
 
→
 
1
0
0
"
,
 
t
s
:
 
1
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
2
"
,
 
o
p
:
 
"
U
P
D
A
T
E
 
b
a
l
a
n
c
e
 
=
 
2
0
0
 
.
.
.
 
C
O
M
M
I
T
"
,
 
t
s
:
 
2
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
1
"
,
 
o
p
:
 
"
S
E
L
E
C
T
 
b
a
l
a
n
c
e
 
W
H
E
R
E
 
i
d
 
=
 
1
 
→
 
2
0
0
 
 
(
C
H
A
N
G
E
D
)
"
,
 
t
s
:
 
3
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
a
n
o
m
a
l
y
A
t
=
{
2
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
A
n
o
m
a
l
y
C
a
r
d


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
h
a
n
t
o
m
 
R
e
a
d
"


 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
=
{
c
u
r
.
a
l
l
o
w
s
.
p
h
a
n
t
o
m
}


 
 
 
 
 
 
 
 
 
 
d
e
s
c
=
"
T
1
 
c
o
u
n
t
s
 
a
c
t
i
v
e
 
o
r
d
e
r
s
 
→
 
1
0
.
 
T
2
 
i
n
s
e
r
t
s
 
a
 
n
e
w
 
a
c
t
i
v
e
 
o
r
d
e
r
.
 
T
1
 
c
o
u
n
t
s
 
a
g
a
i
n
 
→
 
1
1
.
 
N
e
w
 
r
o
w
s
 
'
p
h
a
n
t
o
m
e
d
'
 
i
n
t
o
 
t
h
e
 
r
e
s
u
l
t
 
s
e
t
.
"


 
 
 
 
 
 
 
 
 
 
e
x
a
m
p
l
e
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
1
"
,
 
o
p
:
 
"
S
E
L
E
C
T
 
C
O
U
N
T
(
*
)
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
a
c
t
i
v
e
'
 
→
 
1
0
"
,
 
t
s
:
 
1
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
2
"
,
 
o
p
:
 
"
I
N
S
E
R
T
 
o
r
d
e
r
 
(
s
t
a
t
u
s
=
'
a
c
t
i
v
e
'
)
 
.
.
.
 
C
O
M
M
I
T
"
,
 
t
s
:
 
2
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
w
h
o
:
 
"
T
1
"
,
 
o
p
:
 
"
S
E
L
E
C
T
 
C
O
U
N
T
(
*
)
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
a
c
t
i
v
e
'
 
→
 
1
1
 
 
(
P
H
A
N
T
O
M
)
"
,
 
t
s
:
 
3
 
}
,


 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
a
n
o
m
a
l
y
A
t
=
{
2
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
l
e
v
e
l
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


 
 
 
 
 
 
 
 
 
 
 
 
U
N
D
E
R
 
{
c
u
r
.
n
a
m
e
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
v
e
l
 
=
=
=
 
"
r
e
a
d
-
u
n
c
o
m
m
i
t
t
e
d
"
 
&
&
 
"
A
n
y
t
h
i
n
g
 
g
o
e
s
.
 
A
l
m
o
s
t
 
n
o
 
D
B
 
d
e
f
a
u
l
t
s
 
t
o
 
t
h
i
s
 
—
 
i
t
 
e
x
i
s
t
s
 
m
o
s
t
l
y
 
f
o
r
 
t
h
e
o
r
y
.
 
E
v
e
n
 
M
y
S
Q
L
'
s
 
d
e
f
a
u
l
t
 
s
k
i
p
s
 
i
t
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
v
e
l
 
=
=
=
 
"
r
e
a
d
-
c
o
m
m
i
t
t
e
d
"
 
&
&
 
"
P
o
s
t
g
r
e
s
 
d
e
f
a
u
l
t
.
 
T
2
 
o
n
l
y
 
s
e
e
s
 
o
t
h
e
r
 
t
r
a
n
s
a
c
t
i
o
n
s
'
 
c
o
m
m
i
t
t
e
d
 
s
t
a
t
e
.
 
D
i
r
t
y
 
r
e
a
d
s
 
c
a
n
'
t
 
h
a
p
p
e
n
,
 
b
u
t
 
t
h
e
 
s
a
m
e
 
q
u
e
r
y
 
i
n
 
T
2
 
c
a
n
 
r
e
t
u
r
n
 
d
i
f
f
e
r
e
n
t
 
r
o
w
s
 
o
n
 
r
e
t
r
y
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
v
e
l
 
=
=
=
 
"
r
e
p
e
a
t
a
b
l
e
-
r
e
a
d
"
 
&
&
 
"
M
y
S
Q
L
 
I
n
n
o
D
B
 
d
e
f
a
u
l
t
.
 
S
n
a
p
s
h
o
t
 
t
a
k
e
n
 
a
t
 
f
i
r
s
t
 
r
e
a
d
;
 
T
2
 
k
e
e
p
s
 
s
e
e
i
n
g
 
t
h
a
t
 
s
n
a
p
s
h
o
t
 
f
o
r
 
a
l
l
 
l
a
t
e
r
 
r
e
a
d
s
.
 
P
h
a
n
t
o
m
 
r
e
a
d
s
 
s
t
i
l
l
 
p
o
s
s
i
b
l
e
 
(
d
e
p
e
n
d
i
n
g
 
o
n
 
e
n
g
i
n
e
)
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
v
e
l
 
=
=
=
 
"
s
e
r
i
a
l
i
z
a
b
l
e
"
 
&
&
 
"
A
s
 
i
f
 
t
r
a
n
s
a
c
t
i
o
n
s
 
r
a
n
 
o
n
e
 
a
t
 
a
 
t
i
m
e
.
 
N
o
 
a
n
o
m
a
l
i
e
s
,
 
b
u
t
 
m
o
r
e
 
a
b
o
r
t
s
 
(
T
2
 
m
a
y
 
n
e
e
d
 
t
o
 
r
e
t
r
y
)
 
a
n
d
 
s
l
o
w
e
r
 
u
n
d
e
r
 
c
o
n
t
e
n
t
i
o
n
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




i
n
t
e
r
f
a
c
e
 
A
n
o
m
a
l
y
E
v
e
n
t
 
{
 
w
h
o
:
 
"
T
1
"
 
|
 
"
T
2
"
;
 
o
p
:
 
s
t
r
i
n
g
;
 
t
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




f
u
n
c
t
i
o
n
 
A
n
o
m
a
l
y
C
a
r
d
(
{
 
t
i
t
l
e
,
 
a
l
l
o
w
e
d
,
 
d
e
s
c
,
 
e
x
a
m
p
l
e
,
 
a
n
o
m
a
l
y
A
t
 
}
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
 
a
l
l
o
w
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
;
 
e
x
a
m
p
l
e
:
 
A
n
o
m
a
l
y
E
v
e
n
t
[
]
;
 
a
n
o
m
a
l
y
A
t
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
 
a
l
l
o
w
e
d
 
?
 
`
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
 
:
 
`
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
C
o
l
o
r
:
 
a
l
l
o
w
e
d
 
?
 
`
$
{
W
A
R
N
}
0
8
`
 
:
 
`
$
{
S
D
}
0
8
`
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
 
1
0
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
"
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
2
r
e
m
"
 
}
}
>
{
t
i
t
l
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
S
t
r
i
n
g
(
a
l
l
o
w
e
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
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
l
l
o
w
e
d
 
?
 
W
A
R
N
 
:
 
S
D
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
l
l
o
w
e
d
 
?
 
W
A
R
N
 
:
 
S
D
}
1
4
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
(
a
l
l
o
w
e
d
 
?
 
W
A
R
N
 
:
 
S
D
)
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
l
l
o
w
e
d
 
?
 
"
A
L
L
O
W
E
D
"
 
:
 
"
P
R
E
V
E
N
T
E
D
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
s
p
a
n
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
 
}
}
>
{
d
e
s
c
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
g
-
s
u
b
t
l
e
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
0
p
x
 
1
2
p
x
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
,
 
o
p
a
c
i
t
y
:
 
a
l
l
o
w
e
d
 
?
 
1
 
:
 
0
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
{
e
x
a
m
p
l
e
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
n
o
m
a
l
y
 
=
 
i
 
=
=
=
 
a
n
o
m
a
l
y
A
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
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
3
0
p
x
 
1
f
r
"
,
 
g
a
p
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
 
c
o
l
o
r
:
 
e
.
w
h
o
 
=
=
=
 
"
T
1
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
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
 
}
}
>
{
e
.
w
h
o
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
 
c
o
l
o
r
:
 
i
s
A
n
o
m
a
l
y
 
&
&
 
a
l
l
o
w
e
d
 
?
 
W
A
R
N
 
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
 
}
}
>
{
e
.
o
p
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
 
R
e
a
l
-
w
o
r
l
d
 
p
i
c
k
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
I
C
K
S
 
=
 
[


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
M
o
n
e
y
 
/
 
b
a
n
k
i
n
g
 
t
r
a
n
s
f
e
r
s
"
,
 
l
v
l
:
 
"
S
e
r
i
a
l
i
z
a
b
l
e
"
,
 
r
e
a
s
o
n
:
 
"
A
n
o
m
a
l
i
e
s
 
=
 
r
e
a
l
 
m
o
n
e
y
 
l
o
s
t
.
 
P
a
y
 
t
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
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
E
-
c
o
m
m
e
r
c
e
 
o
r
d
e
r
 
p
l
a
c
e
m
e
n
t
"
,
 
l
v
l
:
 
"
R
e
p
e
a
t
a
b
l
e
 
R
e
a
d
"
,
 
r
e
a
s
o
n
:
 
"
R
e
a
d
i
n
g
 
c
a
r
t
 
t
w
i
c
e
 
s
h
o
u
l
d
 
g
i
v
e
 
t
h
e
 
s
a
m
e
 
a
n
s
w
e
r
;
 
p
h
a
n
t
o
m
s
 
(
n
e
w
 
l
i
n
e
 
i
t
e
m
s
)
 
a
r
e
 
u
s
u
a
l
l
y
 
f
i
n
e
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
M
o
s
t
 
C
R
U
D
 
a
p
p
s
"
,
 
l
v
l
:
 
"
R
e
a
d
 
C
o
m
m
i
t
t
e
d
"
,
 
r
e
a
s
o
n
:
 
"
P
o
s
t
g
r
e
s
 
d
e
f
a
u
l
t
.
 
C
h
e
a
p
,
 
s
a
f
e
 
e
n
o
u
g
h
 
f
o
r
 
r
o
u
t
i
n
e
 
U
I
s
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
A
n
a
l
y
t
i
c
s
 
r
o
l
l
u
p
s
"
,
 
l
v
l
:
 
"
R
e
a
d
 
C
o
m
m
i
t
t
e
d
 
(
o
r
 
S
n
a
p
s
h
o
t
)
"
,
 
r
e
a
s
o
n
:
 
"
C
o
n
s
i
s
t
e
n
t
 
s
n
a
p
s
h
o
t
 
a
c
r
o
s
s
 
m
a
n
y
 
t
a
b
l
e
s
 
f
o
r
 
o
n
e
 
r
e
p
o
r
t
.
 
R
e
a
d
 
U
n
c
o
m
m
i
t
t
e
d
 
i
s
 
r
a
r
e
l
y
 
w
o
r
t
h
 
t
h
e
 
s
p
e
e
d
u
p
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
I
n
v
e
n
t
o
r
y
 
d
e
c
r
e
m
e
n
t
"
,
 
l
v
l
:
 
"
S
e
r
i
a
l
i
z
a
b
l
e
 
+
 
S
E
L
E
C
T
 
F
O
R
 
U
P
D
A
T
E
"
,
 
r
e
a
s
o
n
:
 
"
T
w
o
 
s
i
m
u
l
t
a
n
e
o
u
s
 
p
u
r
c
h
a
s
e
s
 
o
f
 
t
h
e
 
l
a
s
t
 
i
t
e
m
 
m
u
s
t
 
n
o
t
 
b
o
t
h
 
s
u
c
c
e
e
d
.
 
E
i
t
h
e
r
 
l
o
c
k
 
o
r
 
u
s
e
 
S
e
r
i
a
l
i
z
a
b
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
 
R
e
a
l
P
i
c
k
s
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
i
c
h
 
l
e
v
e
l
 
t
o
 
a
c
t
u
a
l
l
y
 
u
s
e
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
 
r
u
l
e
:
 
a
s
 
l
o
o
s
e
 
a
s
 
y
o
u
 
c
a
n
 
t
o
l
e
r
a
t
e
,
 
a
s
 
s
t
r
i
c
t
 
a
s
 
y
o
u
r
 
c
o
r
r
e
c
t
n
e
s
s
 
r
e
q
u
i
r
e
s
.
 
R
e
a
l


 
 
 
 
 
 
 
 
w
o
r
k
l
o
a
d
s
 
w
i
t
h
 
t
h
e
 
l
e
v
e
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
 
t
e
a
m
s
 
a
c
t
u
a
l
l
y
 
p
i
c
k
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
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
P
I
C
K
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
o
r
k
l
o
a
d
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
o
r
k
l
o
a
d
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
6
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
v
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
p
.
r
e
a
s
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
3
_
T
r
a
n
s
a
c
t
i
o
n
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
A
C
I
D
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
i
s
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
I
s
o
l
a
t
i
o
n
 
S
l
i
d
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
l
i
d
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
I
s
o
l
a
t
i
o
n
D
e
m
o
 
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
l
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
l
 
P
i
c
k
s
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
R
e
a
l
P
i
c
k
s
 
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
T
1
 
r
e
a
d
s
 
b
a
l
a
n
c
e
 
=
 
1
0
0
.
 
T
2
 
u
p
d
a
t
e
s
 
b
a
l
a
n
c
e
 
=
 
2
0
0
 
a
n
d
 
c
o
m
m
i
t
s
.
 
T
1
 
r
e
a
d
s
 
b
a
l
a
n
c
e
 
a
g
a
i
n
,
 
g
e
t
s
 
2
0
0
.
 
W
h
a
t
 
a
n
o
m
a
l
y
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
i
r
t
y
 
r
e
a
d
"
,
 
"
N
o
n
-
r
e
p
e
a
t
a
b
l
e
 
r
e
a
d
"
,
 
"
P
h
a
n
t
o
m
 
r
e
a
d
"
,
 
"
L
o
s
t
 
u
p
d
a
t
e
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
S
a
m
e
 
q
u
e
r
y
,
 
t
w
o
 
d
i
f
f
e
r
e
n
t
 
a
n
s
w
e
r
s
 
w
i
t
h
i
n
 
o
n
e
 
t
r
a
n
s
a
c
t
i
o
n
.
 
T
h
a
t
'
s
 
a
 
n
o
n
-
r
e
p
e
a
t
a
b
l
e
 
r
e
a
d
.
 
R
e
a
d
 
C
o
m
m
i
t
t
e
d
 
a
l
l
o
w
s
 
i
t
;
 
R
e
p
e
a
t
a
b
l
e
 
R
e
a
d
 
p
r
e
v
e
n
t
s
 
i
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
e
s
 
S
e
r
i
a
l
i
z
a
b
l
e
 
c
o
s
t
 
m
o
r
e
 
t
h
a
n
 
R
e
a
d
 
C
o
m
m
i
t
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
I
t
 
u
s
e
s
 
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
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
e
n
f
o
r
c
e
s
 
a
 
s
e
r
i
a
l
-
e
q
u
i
v
a
l
e
n
t
 
o
r
d
e
r
i
n
g
,
 
s
o
 
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
 
t
r
a
n
s
a
c
t
i
o
n
s
 
e
i
t
h
e
r
 
w
a
i
t
 
o
r
 
g
e
t
 
a
b
o
r
t
e
d
-
a
n
d
-
r
e
t
r
i
e
d
,
 
i
n
c
r
e
a
s
i
n
g
 
l
a
t
e
n
c
y
 
u
n
d
e
r
 
c
o
n
t
e
n
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
l
o
g
s
 
m
o
r
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
e
n
c
r
y
p
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
S
e
r
i
a
l
i
z
a
b
l
e
 
c
a
n
 
d
e
t
e
c
t
 
s
e
r
i
a
l
i
z
a
t
i
o
n
 
c
o
n
f
l
i
c
t
s
 
a
n
d
 
a
b
o
r
t
 
o
n
e
 
o
f
 
t
h
e
 
t
r
a
n
s
a
c
t
i
o
n
s
,
 
w
h
i
c
h
 
t
h
e
 
a
p
p
 
m
u
s
t
 
r
e
t
r
y
.
 
U
n
d
e
r
 
h
i
g
h
 
c
o
n
t
e
n
t
i
o
n
 
t
h
i
s
 
c
a
n
 
p
r
o
d
u
c
e
 
a
 
l
o
t
 
o
f
 
a
b
o
r
t
s
.
 
T
h
e
 
t
r
a
d
e
 
f
o
r
 
t
h
e
 
s
t
r
o
n
g
e
s
t
 
c
o
r
r
e
c
t
n
e
s
s
 
g
u
a
r
a
n
t
e
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
M
o
n
g
o
D
B
 
s
i
n
g
l
e
-
d
o
c
u
m
e
n
t
 
w
r
i
t
e
s
 
a
r
e
 
A
C
I
D
.
 
M
u
l
t
i
-
d
o
c
u
m
e
n
t
 
t
r
a
n
s
a
c
t
i
o
n
s
 
a
c
r
o
s
s
 
r
e
p
l
i
c
a
s
:
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
o
n
'
t
 
e
x
i
s
t
.
"
,


 
 
 
 
 
 
 
 
"
A
r
e
 
s
u
p
p
o
r
t
e
d
 
b
u
t
 
s
l
o
w
e
r
;
 
n
o
t
 
a
l
l
 
N
o
S
Q
L
 
d
a
t
a
b
a
s
e
s
 
o
f
f
e
r
 
t
h
e
m
.
 
T
h
e
 
r
e
a
s
o
n
 
'
N
o
S
Q
L
 
i
s
 
w
e
b
 
s
c
a
l
e
'
 
w
a
s
 
h
i
s
t
o
r
i
c
a
l
l
y
 
a
 
d
e
n
i
a
l
 
o
f
 
m
u
l
t
i
-
d
o
c
 
A
C
I
D
.
"
,


 
 
 
 
 
 
 
 
"
A
r
e
 
m
a
n
d
a
t
o
r
y
.
"
,


 
 
 
 
 
 
 
 
"
A
l
w
a
y
s
 
f
a
s
t
e
r
 
t
h
a
n
 
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
M
o
d
e
r
n
 
M
o
n
g
o
D
B
 
(
4
.
0
+
)
 
s
u
p
p
o
r
t
s
 
m
u
l
t
i
-
d
o
c
 
t
r
a
n
s
a
c
t
i
o
n
s
 
w
i
t
h
 
a
 
r
e
a
l
 
p
e
r
f
o
r
m
a
n
c
e
 
c
o
s
t
.
 
C
a
s
s
a
n
d
r
a
 
s
t
i
l
l
 
d
o
e
s
n
'
t
.
 
T
h
e
 
h
i
s
t
o
r
i
c
a
l
 
N
o
S
Q
L
 
w
i
n
 
w
a
s
 
r
e
l
a
x
i
n
g
 
A
C
I
D
 
f
o
r
 
s
c
a
l
e
;
 
S
Q
L
 
s
t
i
l
l
 
w
i
n
s
 
o
n
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
c
l
a
r
i
t
y
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
T
h
e
 
'
D
'
 
i
n
 
A
C
I
D
 
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
 
d
a
t
a
 
s
u
r
v
i
v
e
s
 
a
 
c
r
a
s
h
.
 
W
h
a
t
 
d
o
e
s
 
i
t
 
a
c
t
u
a
l
l
y
 
r
e
q
u
i
r
e
 
u
n
d
e
r
 
t
h
e
 
h
o
o
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
R
A
I
D
-
1
 
m
i
r
r
o
r
e
d
 
d
i
s
k
s
.
"
,


 
 
 
 
 
 
 
 
"
W
r
i
t
e
-
a
h
e
a
d
 
l
o
g
 
(
W
A
L
)
 
f
l
u
s
h
e
d
 
t
o
 
d
u
r
a
b
l
e
 
s
t
o
r
a
g
e
 
B
E
F
O
R
E
 
t
h
e
 
c
o
m
m
i
t
 
r
e
t
u
r
n
s
 
s
u
c
c
e
s
s
.
"
,


 
 
 
 
 
 
 
 
"
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
.
"
,


 
 
 
 
 
 
 
 
"
B
a
c
k
u
p
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
D
u
r
a
b
i
l
i
t
y
 
m
e
a
n
s
 
t
h
e
 
c
o
m
m
i
t
 
o
n
l
y
 
a
c
k
s
 
a
f
t
e
r
 
t
h
e
 
c
h
a
n
g
e
 
i
s
 
o
n
 
d
u
r
a
b
l
e
 
m
e
d
i
a
 
(
t
y
p
i
c
a
l
l
y
 
W
A
L
 
f
s
y
n
c
e
d
 
t
o
 
d
i
s
k
)
.
 
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
 
a
n
d
 
b
a
c
k
u
p
s
 
h
e
l
p
 
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
 
a
n
d
 
d
i
s
a
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
y
;
 
d
u
r
a
b
i
l
i
t
y
 
i
s
 
t
h
e
 
p
e
r
-
c
o
m
m
i
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
T
r
a
n
s
a
c
t
i
o
n
s
 
&
 
A
C
I
D
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
5
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
 
k
e
e
p
 
t
h
i
s
 
c
o
n
s
i
s
t
e
n
t
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
 
D
B
 
d
e
s
i
g
n
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




