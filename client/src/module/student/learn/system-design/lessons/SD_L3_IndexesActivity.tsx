
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
 
S
e
a
r
c
h
 
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
A
n
 
i
n
d
e
x
 
t
u
r
n
s
 
O
(
n
)
 
i
n
t
o
 
O
(
l
o
g
 
n
)
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
n
 
i
n
d
e
x
 
i
s
 
a
 
s
e
p
a
r
a
t
e
 
d
a
t
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
 
t
h
a
t
 
m
a
p
s
 
k
e
y
 
→
 
r
o
w
 
p
o
i
n
t
e
r
.
 
T
h
e
 
D
B
 
c
o
n
s
u
l
t
s
 
t
h
e


 
 
 
 
 
 
 
 
i
n
d
e
x
 
f
i
r
s
t
,
 
w
a
l
k
s
 
d
o
w
n
 
i
t
s
 
t
r
e
e
,
 
a
n
d
 
j
u
m
p
s
 
s
t
r
a
i
g
h
t
 
t
o
 
t
h
e
 
m
a
t
c
h
i
n
g
 
r
o
w
s
 
—
 
i
n
s
t
e
a
d
 
o
f


 
 
 
 
 
 
 
 
s
c
a
n
n
i
n
g
 
t
h
e
 
e
n
t
i
r
e
 
t
a
b
l
e
.
 
T
h
e
 
c
o
s
t
:
 
w
r
i
t
e
s
 
a
r
e
 
s
l
o
w
e
r
 
(
e
v
e
r
y
 
i
n
s
e
r
t
 
/
 
u
p
d
a
t
e
 
/
 
d
e
l
e
t
e


 
 
 
 
 
 
 
 
a
l
s
o
 
u
p
d
a
t
e
s
 
t
h
e
 
i
n
d
e
x
)
,
 
a
n
d
 
i
n
d
e
x
e
s
 
c
o
n
s
u
m
e
 
d
i
s
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
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
B
-
T
r
e
e
 
(
d
e
f
a
u
l
t
)
"
,
 
v
:
 
"
B
a
l
a
n
c
e
d
 
t
r
e
e
,
 
O
(
l
o
g
 
n
)
 
l
o
o
k
u
p
,
 
r
a
n
g
e
-
f
r
i
e
n
d
l
y
.
 
T
h
e
 
d
e
f
a
u
l
t
 
i
n
 
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
 
M
o
n
g
o
D
B
.
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


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
H
a
s
h
 
i
n
d
e
x
"
,
 
v
:
 
"
H
a
s
h
 
→
 
b
u
c
k
e
t
.
 
O
(
1
)
 
f
o
r
 
e
x
a
c
t
 
m
a
t
c
h
,
 
u
s
e
l
e
s
s
 
f
o
r
 
r
a
n
g
e
.
 
G
o
o
d
 
f
o
r
 
c
a
c
h
e
-
s
t
y
l
e
 
k
e
y
-
v
a
l
u
e
 
l
o
o
k
u
p
s
.
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
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
G
I
N
 
/
 
G
i
S
T
 
/
 
I
n
v
e
r
t
e
d
"
,
 
v
:
 
"
F
o
r
 
n
o
n
-
s
c
a
l
a
r
 
d
a
t
a
:
 
a
r
r
a
y
s
,
 
J
S
O
N
 
p
a
t
h
s
,
 
f
u
l
l
-
t
e
x
t
.
 
M
a
p
s
 
e
a
c
h
 
t
o
k
e
n
 
t
o
 
t
h
e
 
r
o
w
s
 
c
o
n
t
a
i
n
i
n
g
 
i
t
.
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


 
 
 
 
 
 
 
 
]
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
c
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
c
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
 
c
.
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
c
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
T
R
A
D
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


 
 
 
 
 
 
 
 
 
 
R
e
a
d
s
:
 
<
b
>
w
a
y
 
f
a
s
t
e
r
<
/
b
>
 
o
n
 
i
n
d
e
x
e
d
 
c
o
l
u
m
n
s
.
 
W
r
i
t
e
s
:
 
<
b
>
s
l
o
w
e
r
<
/
b
>
,
 
b
e
c
a
u
s
e
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
i
n
s
e
r
t
/
u
p
d
a
t
e
/
d
e
l
e
t
e
 
a
l
s
o
 
h
a
s
 
t
o
 
u
p
d
a
t
e
 
e
a
c
h
 
i
n
d
e
x
.
 
D
i
s
k
:
 
<
b
>
m
o
r
e
<
/
b
>
,
 
b
e
c
a
u
s
e
 
t
h
e


 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
 
i
s
 
i
t
s
 
o
w
n
 
c
o
p
y
 
o
f
 
t
h
e
 
c
o
l
u
m
n
.
 
P
i
c
k
 
i
n
d
e
x
e
s
 
t
h
a
t
 
a
c
t
u
a
l
l
y
 
g
e
t
 
q
u
e
r
i
e
d
,
 
n
o
t
 
e
v
e
r
y


 
 
 
 
 
 
 
 
 
 
c
o
l
u
m
n
 
&
l
d
q
u
o
;
j
u
s
t
 
i
n
 
c
a
s
e
.
&
r
d
q
u
o
;


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
A
 
5
0
M
-
r
o
w
 
<
b
>
o
r
d
e
r
s
<
/
b
>
 
t
a
b
l
e
.
 
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
S
E
L
E
C
T
 
*
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
u
s
e
r
_
i
d
 
=
 
4
2
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


 
 
 
 
 
 
 
 
 
 
w
i
t
h
o
u
t
 
a
n
 
i
n
d
e
x
:
 
f
u
l
l
 
s
c
a
n
 
o
f
 
5
0
M
 
r
o
w
s
.
 
W
i
t
h
 
a
 
B
-
t
r
e
e
 
o
n
 
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
u
s
e
r
_
i
d
<
/
c
o
d
e
>
:


 
 
 
 
 
 
 
 
 
 
~
2
6
 
c
o
m
p
a
r
i
s
o
n
s
 
(
l
o
g
₂
 
5
0
M
)
.
 
T
h
e
 
q
u
e
r
y
 
g
o
e
s
 
f
r
o
m
 
s
e
c
o
n
d
s
 
t
o
 
m
i
c
r
o
s
e
c
o
n
d
s
.
 
<
b
>
P
o
s
t
g
r
e
s


 
 
 
 
 
 
 
 
 
 
E
X
P
L
A
I
N
 
A
N
A
L
Y
Z
E
<
/
b
>
 
s
h
o
w
s
 
y
o
u
 
w
h
i
c
h
 
i
n
d
e
x
e
s
 
t
h
e
 
p
l
a
n
n
e
r
 
p
i
c
k
e
d
 
—
 
d
e
b
u
g
g
i
n
g
 
i
n
d
e
x


 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s
 
i
s
 
m
o
s
t
l
y
 
r
e
a
d
i
n
g
 
E
X
P
L
A
I
N
 
o
u
t
p
u
t
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
 
B
-
t
r
e
e
 
d
r
i
l
l
d
o
w
n
 
+
 
s
c
a
n
-
v
s
-
s
e
e
k
 
r
a
c
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
 
T
r
e
e
N
o
d
e
 
{


 
 
k
e
y
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
;


 
 
c
h
i
l
d
r
e
n
?
:
 
T
r
e
e
N
o
d
e
[
]
;


}




c
o
n
s
t
 
T
R
E
E
:
 
T
r
e
e
N
o
d
e
 
=
 
{


 
 
k
e
y
s
:
 
[
2
5
,
 
5
0
,
 
7
5
]
,


 
 
c
h
i
l
d
r
e
n
:
 
[


 
 
 
 
{
 
k
e
y
s
:
 
[
5
,
 
1
2
,
 
2
0
]
 
}
,


 
 
 
 
{
 
k
e
y
s
:
 
[
3
0
,
 
3
8
,
 
4
5
]
 
}
,


 
 
 
 
{
 
k
e
y
s
:
 
[
5
5
,
 
6
2
,
 
7
0
]
 
}
,


 
 
 
 
{
 
k
e
y
s
:
 
[
8
0
,
 
8
8
,
 
9
5
]
 
}
,


 
 
]
,


}
;




f
u
n
c
t
i
o
n
 
B
T
r
e
e
D
r
i
l
l
d
o
w
n
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
a
r
g
e
t
,
 
s
e
t
T
a
r
g
e
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
3
8
)
;


 
 
c
o
n
s
t
 
[
s
c
a
n
T
,
 
s
e
t
S
c
a
n
T
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
-
1
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
e
k
S
t
e
p
,
 
s
e
t
S
e
e
k
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
-
1
)
;


 
 
c
o
n
s
t
 
[
r
a
c
i
n
g
,
 
s
e
t
R
a
c
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
 
C
o
m
p
u
t
e
 
t
h
e
 
s
e
e
k
 
p
a
t
h
 
f
o
r
 
t
h
e
 
c
u
r
r
e
n
t
 
t
a
r
g
e
t


 
 
c
o
n
s
t
 
s
e
e
k
P
a
t
h
:
 
{
 
l
e
v
e
l
:
 
0
 
|
 
1
;
 
i
d
x
:
 
n
u
m
b
e
r
;
 
c
m
p
:
 
n
u
m
b
e
r
[
]
 
}
[
]
 
=
 
[
]
;


 
 
/
/
 
R
o
o
t
 
l
e
v
e
l


 
 
l
e
t
 
r
o
o
t
I
d
x
 
=
 
T
R
E
E
.
k
e
y
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
k
)
 
=
>
 
t
a
r
g
e
t
 
<
=
 
k
)
;


 
 
i
f
 
(
r
o
o
t
I
d
x
 
=
=
=
 
-
1
)
 
r
o
o
t
I
d
x
 
=
 
T
R
E
E
.
k
e
y
s
.
l
e
n
g
t
h
;


 
 
s
e
e
k
P
a
t
h
.
p
u
s
h
(
{
 
l
e
v
e
l
:
 
0
,
 
i
d
x
:
 
r
o
o
t
I
d
x
,
 
c
m
p
:
 
T
R
E
E
.
k
e
y
s
 
}
)
;


 
 
/
/
 
L
e
a
f
 
l
e
v
e
l


 
 
c
o
n
s
t
 
l
e
a
f
 
=
 
T
R
E
E
.
c
h
i
l
d
r
e
n
!
[
r
o
o
t
I
d
x
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
f
I
d
x
 
=
 
l
e
a
f
.
k
e
y
s
.
i
n
d
e
x
O
f
(
t
a
r
g
e
t
)
;


 
 
s
e
e
k
P
a
t
h
.
p
u
s
h
(
{
 
l
e
v
e
l
:
 
1
,
 
i
d
x
:
 
l
e
a
f
I
d
x
,
 
c
m
p
:
 
l
e
a
f
.
k
e
y
s
 
}
)
;




 
 
c
o
n
s
t
 
T
O
T
A
L
_
R
O
W
S
 
=
 
1
2
;
 
/
/
 
v
i
s
i
b
l
e
 
"
r
o
w
s
"
 
f
o
r
 
t
h
e
 
s
c
a
n
 
a
n
i
m
a
t
i
o
n
 
(
r
e
p
r
e
s
e
n
t
i
n
g
 
N
 
r
o
w
s
)




 
 
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
a
c
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
 
c
a
n
c
e
l
l
e
d
 
=
 
f
a
l
s
e
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
S
c
a
n
T
(
-
1
)
;


 
 
 
 
s
e
t
S
e
e
k
S
t
e
p
(
-
1
)
;




 
 
 
 
/
/
 
S
c
a
n
:
 
1
0
0
m
s
 
p
e
r
 
r
o
w


 
 
 
 
l
e
t
 
s
 
=
 
0
;


 
 
 
 
c
o
n
s
t
 
s
c
a
n
H
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


 
 
 
 
 
 
i
f
 
(
c
a
n
c
e
l
l
e
d
)
 
r
e
t
u
r
n
 
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
s
c
a
n
H
a
n
d
l
e
)
;


 
 
 
 
 
 
s
+
+
;


 
 
 
 
 
 
s
e
t
S
c
a
n
T
(
s
)
;


 
 
 
 
 
 
i
f
 
(
s
 
>
=
 
T
O
T
A
L
_
R
O
W
S
)
 
{


 
 
 
 
 
 
 
 
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
s
c
a
n
H
a
n
d
l
e
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,
 
2
0
0
)
;




 
 
 
 
/
/
 
S
e
e
k
:
 
7
0
0
m
s
 
p
e
r
 
l
e
v
e
l
 
(
s
l
o
w
 
e
n
o
u
g
h
 
t
o
 
r
e
a
d
)


 
 
 
 
l
e
t
 
k
 
=
 
0
;


 
 
 
 
c
o
n
s
t
 
s
e
e
k
H
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


 
 
 
 
 
 
i
f
 
(
c
a
n
c
e
l
l
e
d
)
 
r
e
t
u
r
n
 
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
s
e
e
k
H
a
n
d
l
e
)
;


 
 
 
 
 
 
k
+
+
;


 
 
 
 
 
 
s
e
t
S
e
e
k
S
t
e
p
(
k
)
;


 
 
 
 
 
 
i
f
 
(
k
 
>
=
 
s
e
e
k
P
a
t
h
.
l
e
n
g
t
h
)
 
{


 
 
 
 
 
 
 
 
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
s
e
e
k
H
a
n
d
l
e
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,
 
7
0
0
)
;




 
 
 
 
c
o
n
s
t
 
s
t
o
p
H
a
n
d
l
e
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
R
a
c
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
,
 
3
5
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
 
{


 
 
 
 
 
 
c
a
n
c
e
l
l
e
d
 
=
 
t
r
u
e
;


 
 
 
 
 
 
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
s
c
a
n
H
a
n
d
l
e
)
;


 
 
 
 
 
 
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
s
e
e
k
H
a
n
d
l
e
)
;


 
 
 
 
 
 
c
l
e
a
r
T
i
m
e
o
u
t
(
s
t
o
p
H
a
n
d
l
e
)
;


 
 
 
 
}
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
}
,
 
[
r
a
c
i
n
g
,
 
t
a
r
g
e
t
]
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
r
t
R
a
c
e
 
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
a
c
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


 
 
}
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
a
c
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
S
c
a
n
T
(
-
1
)
;


 
 
 
 
s
e
t
S
e
e
k
S
t
e
p
(
-
1
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
R
a
c
e
 
t
h
e
 
i
n
d
e
x
 
a
g
a
i
n
s
t
 
t
h
e
 
f
u
l
l
 
s
c
a
n
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
a
r
g
e
t
 
r
o
w
:
 
<
b
>
{
t
a
r
g
e
t
}
<
/
b
>
.
 
T
h
e
 
f
u
l
l
 
s
c
a
n
 
c
h
e
c
k
s
 
e
v
e
r
y
 
r
o
w
 
i
n
 
o
r
d
e
r
.
 
T
h
e
 
B
-
t
r
e
e
 
s
e
e
k


 
 
 
 
 
 
 
 
w
a
l
k
s
 
2
 
l
e
v
e
l
s
:
 
p
i
c
k
 
t
h
e
 
r
i
g
h
t
 
c
h
i
l
d
 
a
t
 
t
h
e
 
r
o
o
t
,
 
t
h
e
n
 
f
i
n
d
 
t
h
e
 
k
e
y
 
i
n
 
t
h
e
 
l
e
a
f
.
 
P
r
e
s
s


 
 
 
 
 
 
 
 
r
a
c
e
 
a
n
d
 
w
a
t
c
h
 
t
h
e
m
 
g
o
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
a
r
g
e
t
 
k
e
y
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
[
5
,
 
3
8
,
 
6
2
,
 
8
8
]
.
m
a
p
(
(
k
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
 
t
a
r
g
e
t
 
=
=
=
 
k
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
k
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
 
{
 
s
e
t
T
a
r
g
e
t
(
k
)
;
 
r
e
s
e
t
(
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
a
c
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
 
r
a
c
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
r
a
c
i
n
g
 
?
 
0
.
5
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
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
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
T
w
o
 
l
a
n
e
s
 
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
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
u
l
l
 
s
c
a
n
 
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
 
W
A
R
N
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
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
U
L
L
 
T
A
B
L
E
 
S
C
A
N
 
·
 
O
(
n
)


 
 
 
 
 
 
 
 
 
 
 
 
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
[
5
,
 
1
2
,
 
2
0
,
 
3
0
,
 
3
8
,
 
4
5
,
 
5
5
,
 
6
2
,
 
7
0
,
 
8
0
,
 
8
8
,
 
9
5
]
.
m
a
p
(
(
k
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
 
v
i
s
i
t
e
d
 
=
 
s
c
a
n
T
 
>
=
 
0
 
&
&
 
i
 
<
 
s
c
a
n
T
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
 
=
 
s
c
a
n
T
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
o
u
n
d
 
=
 
v
i
s
i
t
e
d
 
&
&
 
k
 
=
=
=
 
t
a
r
g
e
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
f
o
u
n
d
 
?
 
S
D
 
:
 
c
u
r
r
e
n
t
 
?
 
W
A
R
N
 
:
 
v
i
s
i
t
e
d
 
?
 
N
E
U
T
R
A
L
 
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
k
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
 
f
o
u
n
d
 
?
 
`
$
{
S
D
}
3
3
`
 
:
 
c
u
r
r
e
n
t
 
?
 
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
 
:
 
v
i
s
i
t
e
d
 
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
0
8
)
"
 
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
0
4
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
o
u
n
d
 
?
 
S
D
 
:
 
c
u
r
r
e
n
t
 
?
 
W
A
R
N
 
:
 
`
$
{
N
E
U
T
R
A
L
}
3
3
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
1
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
8
p
x
 
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
 
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
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
 
c
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
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
0
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
 
W
A
R
N
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
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
c
a
n
T
)
}
<
/
s
p
a
n
>
 
/
 
1
2
 
r
o
w
s


 
 
 
 
 
 
 
 
 
 
 
 
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
 
B
-
t
r
e
e
 
s
e
e
k
 
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
S
D
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
 
S
D
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
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
-
T
R
E
E
 
S
E
E
K
 
·
 
O
(
l
o
g
 
n
)


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
3
2
0
 
2
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
f
r
o
m
 
r
o
o
t
 
t
o
 
l
e
a
v
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
T
R
E
E
.
c
h
i
l
d
r
e
n
!
.
m
a
p
(
(
_
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
 
o
n
P
a
t
h
 
=
 
s
e
e
k
S
t
e
p
 
>
=
 
1
 
&
&
 
i
 
=
=
=
 
s
e
e
k
P
a
t
h
[
0
]
.
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
1
6
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
4
0
 
+
 
i
 
*
 
8
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
{
o
n
P
a
t
h
 
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
o
n
P
a
t
h
 
?
 
2
 
:
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
o
n
P
a
t
h
 
?
 
1
 
:
 
0
.
4
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
o
o
t
 
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
8
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
2
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
1
6
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
3
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
:
 
s
e
e
k
S
t
e
p
 
>
=
 
0
 
?
 
`
$
{
S
D
}
3
3
`
 
:
 
`
$
{
N
E
U
T
R
A
L
}
2
2
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
:
 
s
e
e
k
S
t
e
p
 
>
=
 
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
T
R
E
E
.
k
e
y
s
.
m
a
p
(
(
k
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
P
i
c
k
e
d
 
=
 
s
e
e
k
S
t
e
p
 
>
=
 
0
 
&
&
 
i
 
=
=
=
 
s
e
e
k
P
a
t
h
[
0
]
.
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
1
2
0
 
+
 
i
 
*
 
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
4
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
i
s
P
i
c
k
e
d
 
?
 
"
#
0
b
1
2
2
0
"
 
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
i
s
P
i
c
k
e
d
 
?
 
8
0
0
 
:
 
6
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
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
l
e
a
v
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
T
R
E
E
.
c
h
i
l
d
r
e
n
!
.
m
a
p
(
(
c
h
i
l
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
 
o
n
P
a
t
h
 
=
 
s
e
e
k
S
t
e
p
 
>
=
 
1
 
&
&
 
i
 
=
=
=
 
s
e
e
k
P
a
t
h
[
0
]
.
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
6
 
+
 
i
 
*
 
8
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
 
k
e
y
=
{
i
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
1
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
6
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
3
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
:
 
o
n
P
a
t
h
 
?
 
`
$
{
S
D
}
3
3
`
 
:
 
`
$
{
N
E
U
T
R
A
L
}
2
2
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
:
 
o
n
P
a
t
h
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
i
l
d
.
k
e
y
s
.
m
a
p
(
(
k
,
 
j
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
F
o
u
n
d
 
=
 
o
n
P
a
t
h
 
&
&
 
k
 
=
=
=
 
t
a
r
g
e
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
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
 
+
 
1
2
 
+
 
j
 
*
 
2
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
1
6
3
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
i
s
F
o
u
n
d
 
?
 
"
#
0
b
1
2
2
0
"
 
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
W
e
i
g
h
t
=
{
i
s
F
o
u
n
d
 
?
 
8
0
0
 
:
 
6
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
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
o
w
 
f
o
u
n
d
 
m
a
r
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
e
k
S
t
e
p
 
>
=
 
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
6
 
+
 
s
e
e
k
P
a
t
h
[
0
]
.
i
d
x
 
*
 
8
0
 
+
 
3
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
2
0
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
8
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
 
r
o
w
 
f
o
u
n
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
0
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
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
v
e
l
s
 
w
a
l
k
e
d
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
 
M
a
t
h
.
m
i
n
(
s
e
e
k
S
t
e
p
,
 
2
)
)
}
<
/
s
p
a
n
>
 
/
 
2


 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
a
r
t
R
a
c
e
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
a
c
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
b
t
n
(
S
D
,
 
r
a
c
i
n
g
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
a
c
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


 
 
 
 
 
 
 
 
 
 
 
 
r
a
c
e


 
 
 
 
 
 
 
 
 
 
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
,
 
f
a
l
s
e
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


 
 
 
 
 
 
 
 
 
 
{
s
c
a
n
T
 
>
=
 
T
O
T
A
L
_
R
O
W
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
E
S
U
L
T


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
u
l
l
 
s
c
a
n
 
c
h
e
c
k
e
d
 
a
l
l
 
1
2
 
r
o
w
s
.
 
B
-
t
r
e
e
 
s
e
e
k
 
u
s
e
d
 
2
 
c
o
m
p
a
r
i
s
o
n
s
.
 
O
n
 
a
 
5
0
M
-
r
o
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
b
l
e
 
t
h
a
t
&
r
s
q
u
o
;
s
 
5
0
,
0
0
0
,
0
0
0
 
v
s
 
~
2
6
 
c
o
m
p
a
r
i
s
o
n
s
.
 
T
h
e
 
w
h
o
l
e
 
p
o
i
n
t
 
o
f
 
i
n
d
e
x
e
s
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
,
 
d
i
s
a
b
l
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
 
d
i
s
a
b
l
e
d
 
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
d
i
s
a
b
l
e
d
 
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
2
5
)
"
 
:
 
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
 
d
i
s
a
b
l
e
d
 
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
:
 
d
i
s
a
b
l
e
d
 
?
 
N
E
U
T
R
A
L
 
:
 
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


 
 
 
 
o
p
a
c
i
t
y
:
 
d
i
s
a
b
l
e
d
 
?
 
0
.
5
 
:
 
1
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
n
 
i
n
d
e
x
e
s
 
h
e
l
p
 
v
s
 
h
u
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
E
N
A
R
I
O
S
 
=
 
[


 
 
{
 
q
:
 
"
W
H
E
R
E
 
u
s
e
r
_
i
d
 
=
 
4
2
"
,
 
v
e
r
d
i
c
t
:
 
"
I
N
D
E
X
 
H
E
L
P
S
"
,
 
c
:
 
S
D
,
 
w
h
y
:
 
"
E
q
u
a
l
i
t
y
 
o
n
 
i
n
d
e
x
e
d
 
c
o
l
u
m
n
.
 
D
i
r
e
c
t
 
B
-
t
r
e
e
 
s
e
e
k
.
"
 
}
,


 
 
{
 
q
:
 
"
W
H
E
R
E
 
c
r
e
a
t
e
d
_
a
t
 
B
E
T
W
E
E
N
 
'
2
0
2
6
-
0
1
-
0
1
'
 
A
N
D
 
'
2
0
2
6
-
0
2
-
0
1
'
"
,
 
v
e
r
d
i
c
t
:
 
"
I
N
D
E
X
 
H
E
L
P
S
"
,
 
c
:
 
S
D
,
 
w
h
y
:
 
"
R
a
n
g
e
 
s
c
a
n
 
o
n
 
i
n
d
e
x
e
d
 
c
o
l
u
m
n
.
 
B
-
t
r
e
e
 
w
a
l
k
s
 
o
n
e
 
p
a
t
h
,
 
t
h
e
n
 
i
t
e
r
a
t
e
s
 
l
e
a
v
e
s
.
"
 
}
,


 
 
{
 
q
:
 
"
W
H
E
R
E
 
L
O
W
E
R
(
e
m
a
i
l
)
 
=
 
'
a
s
h
a
@
e
x
a
m
p
l
e
.
c
o
m
'
"
,
 
v
e
r
d
i
c
t
:
 
"
I
N
D
E
X
 
M
I
S
S
E
D
"
,
 
c
:
 
W
A
R
N
,
 
w
h
y
:
 
"
F
u
n
c
t
i
o
n
 
o
n
 
c
o
l
u
m
n
 
→
 
p
l
a
n
n
e
r
 
c
a
n
'
t
 
u
s
e
 
a
 
s
i
m
p
l
e
 
i
n
d
e
x
.
 
N
e
e
d
 
a
 
f
u
n
c
t
i
o
n
a
l
 
i
n
d
e
x
 
o
n
 
L
O
W
E
R
(
e
m
a
i
l
)
.
"
 
}
,


 
 
{
 
q
:
 
"
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
r
a
o
%
'
"
,
 
v
e
r
d
i
c
t
:
 
"
I
N
D
E
X
 
M
I
S
S
E
D
"
,
 
c
:
 
W
A
R
N
,
 
w
h
y
:
 
"
L
e
a
d
i
n
g
 
w
i
l
d
c
a
r
d
.
 
B
-
t
r
e
e
 
c
a
n
'
t
 
s
e
e
k
 
t
o
 
i
t
.
 
U
s
e
 
a
 
t
r
i
g
r
a
m
 
o
r
 
f
u
l
l
-
t
e
x
t
 
i
n
d
e
x
 
i
n
s
t
e
a
d
.
"
 
}
,


 
 
{
 
q
:
 
"
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
 
(
9
0
%
 
o
f
 
r
o
w
s
 
a
r
e
 
a
c
t
i
v
e
)
"
,
 
v
e
r
d
i
c
t
:
 
"
I
N
D
E
X
 
H
U
R
T
S
"
,
 
c
:
 
W
A
R
N
,
 
w
h
y
:
 
"
L
o
w
 
s
e
l
e
c
t
i
v
i
t
y
.
 
I
n
d
e
x
 
l
o
o
k
u
p
 
+
 
t
a
b
l
e
 
f
e
t
c
h
 
i
s
 
s
l
o
w
e
r
 
t
h
a
n
 
j
u
s
t
 
s
c
a
n
n
i
n
g
.
"
 
}
,


 
 
{
 
q
:
 
"
I
n
s
e
r
t
-
h
e
a
v
y
 
t
a
b
l
e
 
w
i
t
h
 
8
 
i
n
d
e
x
e
s
"
,
 
v
e
r
d
i
c
t
:
 
"
I
N
D
E
X
 
H
U
R
T
S
"
,
 
c
:
 
W
A
R
N
,
 
w
h
y
:
 
"
E
v
e
r
y
 
i
n
s
e
r
t
 
m
a
i
n
t
a
i
n
s
 
8
 
i
n
d
e
x
e
s
.
 
W
r
i
t
e
 
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
 
c
o
l
l
a
p
s
e
s
.
 
D
r
o
p
 
u
n
u
s
e
d
 
i
n
d
e
x
e
s
 
f
i
r
s
t
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
e
n
a
r
i
o
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
e
n
 
t
h
e
 
i
n
d
e
x
 
h
e
l
p
s
,
 
w
h
e
n
 
i
t
 
d
o
e
s
n
&
r
s
q
u
o
;
t
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
i
x
 
c
o
m
m
o
n
 
p
a
t
t
e
r
n
s
 
a
n
d
 
w
h
a
t
 
t
h
e
 
q
u
e
r
y
 
p
l
a
n
n
e
r
 
a
c
t
u
a
l
l
y
 
d
o
e
s
.
 
R
e
a
d
i
n
g
 
E
X
P
L
A
I
N
 
A
N
A
L
Y
Z
E


 
 
 
 
 
 
 
 
t
e
a
c
h
e
s
 
y
o
u
 
t
h
e
s
e
 
i
n
 
o
n
e
 
a
f
t
e
r
n
o
o
n
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
E
N
A
R
I
O
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
q
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
1
f
r
 
1
3
0
p
x
 
2
f
r
"
,
 
g
a
p
:
 
1
6
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
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
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
s
.
q
}
<
/
c
o
d
e
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
 
s
.
c
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
4
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
s
.
c
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
s
.
c
}
1
4
`
,
 
t
e
x
t
A
l
i
g
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
v
e
r
d
i
c
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
 
}
}
>
{
s
.
w
h
y
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
I
n
d
e
x
e
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
r
a
c
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
R
a
c
e
 
t
h
e
 
S
c
a
n
"
,
 
i
c
o
n
:
 
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
B
T
r
e
e
D
r
i
l
l
d
o
w
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
s
c
e
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
H
e
l
p
s
 
v
s
 
H
u
r
t
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
S
c
e
n
a
r
i
o
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
A
 
5
0
M
 
r
o
w
 
t
a
b
l
e
 
h
a
s
 
a
 
B
-
t
r
e
e
 
i
n
d
e
x
 
o
n
 
u
s
e
r
_
i
d
.
 
R
o
u
g
h
l
y
 
h
o
w
 
m
a
n
y
 
c
o
m
p
a
r
i
s
o
n
s
 
d
o
e
s
 
t
h
e
 
s
e
e
k
 
t
a
k
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
1
"
,
 
"
A
b
o
u
t
 
2
6
 
(
l
o
g
₂
 
5
0
M
)
"
,
 
"
5
0
 
m
i
l
l
i
o
n
"
,
 
"
2
,
5
0
0
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
B
-
t
r
e
e
 
h
e
i
g
h
t
 
g
r
o
w
s
 
l
o
g
a
r
i
t
h
m
i
c
a
l
l
y
.
 
l
o
g
₂
(
5
0
,
0
0
0
,
0
0
0
)
 
≈
 
2
5
.
6
,
 
s
o
 
a
b
o
u
t
 
2
6
 
c
o
m
p
a
r
i
s
o
n
s
.
 
T
h
a
t
'
s
 
t
h
e
 
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
 
b
e
t
w
e
e
n
 
m
i
c
r
o
s
e
c
o
n
d
s
 
a
n
d
 
m
i
n
u
t
e
s
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
 
a
d
d
i
n
g
 
8
 
i
n
d
e
x
e
s
 
t
o
 
a
 
w
r
i
t
e
-
h
e
a
v
y
 
t
a
b
l
e
 
h
u
r
t
 
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
n
d
e
x
e
s
 
m
a
k
e
 
m
e
m
o
r
y
 
h
o
t
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
E
v
e
r
y
 
i
n
s
e
r
t
/
u
p
d
a
t
e
 
h
a
s
 
t
o
 
m
a
i
n
t
a
i
n
 
a
l
l
 
8
 
i
n
d
e
x
e
s
,
 
s
o
 
w
r
i
t
e
 
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
 
d
r
o
p
s
 
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
.
"
,


 
 
 
 
 
 
 
 
"
D
i
s
k
 
g
e
t
s
 
f
u
l
l
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
 
b
r
e
a
k
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
I
n
d
e
x
e
s
 
a
r
e
n
'
t
 
f
r
e
e
.
 
E
a
c
h
 
i
n
s
e
r
t
 
t
o
u
c
h
e
s
 
e
v
e
r
y
 
r
e
l
e
v
a
n
t
 
i
n
d
e
x
.
 
D
r
o
p
 
i
n
d
e
x
e
s
 
t
h
a
t
 
a
r
e
n
'
t
 
u
s
e
d
 
b
y
 
y
o
u
r
 
q
u
e
r
i
e
s
 
—
 
p
g
_
s
t
a
t
_
u
s
e
r
_
i
n
d
e
x
e
s
 
s
h
o
w
s
 
y
o
u
 
w
h
i
c
h
 
o
n
e
s
 
h
a
v
e
n
'
t
 
b
e
e
n
 
r
e
a
d
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
H
E
R
E
 
L
O
W
E
R
(
e
m
a
i
l
)
 
=
 
'
a
s
h
a
@
e
x
a
m
p
l
e
.
c
o
m
'
 
o
n
 
a
 
c
o
l
u
m
n
 
w
i
t
h
 
a
 
r
e
g
u
l
a
r
 
i
n
d
e
x
 
o
n
 
e
m
a
i
l
.
 
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
n
d
e
x
 
i
s
 
u
s
e
d
.
"
,


 
 
 
 
 
 
 
 
"
F
u
l
l
 
s
c
a
n
 
—
 
t
h
e
 
f
u
n
c
t
i
o
n
 
o
n
 
t
h
e
 
c
o
l
u
m
n
 
m
e
a
n
s
 
t
h
e
 
p
l
a
n
n
e
r
 
c
a
n
'
t
 
u
s
e
 
a
 
r
e
g
u
l
a
r
 
i
n
d
e
x
.
 
N
e
e
d
 
a
 
f
u
n
c
t
i
o
n
a
l
 
i
n
d
e
x
:
 
C
R
E
A
T
E
 
I
N
D
E
X
 
.
.
.
 
O
N
 
u
s
e
r
s
(
L
O
W
E
R
(
e
m
a
i
l
)
)
.
"
,


 
 
 
 
 
 
 
 
"
Q
u
e
r
y
 
e
r
r
o
r
s
.
"
,


 
 
 
 
 
 
 
 
"
I
n
d
e
x
 
o
n
 
e
m
a
i
l
 
i
s
 
i
n
v
a
l
i
d
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
I
n
d
e
x
e
s
 
m
a
t
c
h
 
t
h
e
 
E
X
A
C
T
 
e
x
p
r
e
s
s
i
o
n
 
t
h
e
y
 
w
e
r
e
 
c
r
e
a
t
e
d
 
o
n
.
 
L
O
W
E
R
(
e
m
a
i
l
)
 
i
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
 
e
x
p
r
e
s
s
i
o
n
 
f
r
o
m
 
e
m
a
i
l
,
 
s
o
 
a
 
r
e
g
u
l
a
r
 
e
m
a
i
l
 
i
n
d
e
x
 
c
a
n
'
t
 
h
e
l
p
.
 
F
u
n
c
t
i
o
n
a
l
 
i
n
d
e
x
e
s
 
(
o
r
 
r
e
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
 
q
u
e
r
y
 
t
o
 
a
v
o
i
d
 
L
O
W
E
R
)
 
f
i
x
 
t
h
i
s
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
H
a
s
h
 
i
n
d
e
x
e
s
 
h
a
v
e
 
O
(
1
)
 
l
o
o
k
u
p
.
 
W
h
y
 
a
r
e
n
'
t
 
t
h
e
y
 
t
h
e
 
d
e
f
a
u
l
t
 
i
n
 
P
o
s
t
g
r
e
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
T
h
e
y
'
r
e
 
s
l
o
w
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
o
n
l
y
 
s
u
p
p
o
r
t
 
e
q
u
a
l
i
t
y
 
(
n
o
 
r
a
n
g
e
 
q
u
e
r
i
e
s
,
 
n
o
 
O
R
D
E
R
 
B
Y
,
 
n
o
 
L
I
K
E
)
,
 
a
n
d
 
B
-
t
r
e
e
'
s
 
O
(
l
o
g
 
n
)
 
i
s
 
f
a
s
t
 
e
n
o
u
g
h
 
t
h
a
t
 
h
a
s
h
'
s
 
s
l
i
g
h
t
 
e
d
g
e
 
i
s
n
'
t
 
w
o
r
t
h
 
l
o
s
i
n
g
 
t
h
e
 
f
l
e
x
i
b
i
l
i
t
y
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
u
s
e
 
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
T
h
e
y
 
d
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
B
-
t
r
e
e
s
 
s
u
p
p
o
r
t
 
e
q
u
a
l
i
t
y
,
 
r
a
n
g
e
,
 
O
R
D
E
R
 
B
Y
,
 
p
r
e
f
i
x
 
L
I
K
E
,
 
a
n
d
 
j
o
i
n
s
.
 
H
a
s
h
 
i
n
d
e
x
e
s
 
o
n
l
y
 
s
u
p
p
o
r
t
 
e
q
u
a
l
i
t
y
.
 
T
h
e
 
c
o
n
s
t
a
n
t
-
t
i
m
e
 
w
i
n
 
i
s
n
'
t
 
w
o
r
t
h
 
g
i
v
i
n
g
 
u
p
 
e
v
e
r
y
t
h
i
n
g
 
e
l
s
e
 
f
o
r
 
t
h
e
 
t
y
p
i
c
a
l
 
q
u
e
r
y
 
m
i
x
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
I
n
d
e
x
e
s
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
 
f
i
r
s
t
 
'
w
h
y
 
i
s
 
t
h
i
s
 
q
u
e
r
y
 
s
l
o
w
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
 
i
n
t
e
r
v
i
e
w
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


