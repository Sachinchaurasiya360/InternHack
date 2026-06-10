
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
R
e
f
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
 
L
i
n
k
2
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
 
T
h
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
 
a
p
p
l
i
e
d
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
T
E
P
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
1
.
 
R
e
q
u
i
r
e
m
e
n
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


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
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
:
 
s
h
o
r
t
e
n
 
a
 
U
R
L
,
 
r
e
d
i
r
e
c
t
 
o
n
 
v
i
s
i
t
,
 
o
p
t
i
o
n
a
l
 
c
u
s
t
o
m
 
a
l
i
a
s
.
"
,


 
 
 
 
 
 
"
N
o
n
-
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
:
 
r
e
a
d
-
h
e
a
v
y
 
(
~
1
0
:
1
 
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
)
,
 
l
o
w
-
l
a
t
e
n
c
y
 
r
e
d
i
r
e
c
t
s
 
(
<
5
0
m
s
 
p
9
9
)
,
 
h
i
g
h
l
y
 
a
v
a
i
l
a
b
l
e
.
"
,


 
 
 
 
 
 
"
O
u
t
 
o
f
 
s
c
o
p
e
:
 
a
n
a
l
y
t
i
c
s
,
 
e
x
p
i
r
y
,
 
a
u
t
h
 
(
f
o
r
 
t
h
e
 
i
n
t
e
r
v
i
e
w
 
v
e
r
s
i
o
n
)
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
2
.
 
E
s
t
i
m
a
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
 
W
A
R
N
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
1
0
0
M
 
U
R
L
s
 
c
r
e
a
t
e
d
/
d
a
y
 
→
 
~
1
,
2
0
0
 
w
r
i
t
e
s
/
s
e
c
 
a
v
e
r
a
g
e
,
 
p
e
a
k
 
~
6
k
/
s
e
c
.
"
,


 
 
 
 
 
 
"
R
e
a
d
s
 
a
t
 
1
0
x
 
w
r
i
t
e
s
 
→
 
~
1
2
k
/
s
e
c
 
a
v
e
r
a
g
e
,
 
p
e
a
k
 
~
6
0
k
/
s
e
c
.
"
,


 
 
 
 
 
 
"
S
t
o
r
a
g
e
:
 
1
0
0
M
 
×
 
3
6
5
 
×
 
5
 
y
r
s
 
×
 
5
0
0
 
b
y
t
e
s
 
≈
 
9
0
 
T
B
 
o
v
e
r
 
5
 
y
e
a
r
s
.
"
,


 
 
 
 
 
 
"
S
h
o
r
t
-
c
o
d
e
 
l
e
n
g
t
h
:
 
6
 
c
h
a
r
s
 
×
 
6
2
 
a
l
p
h
a
b
e
t
 
=
 
5
6
 
b
i
l
l
i
o
n
 
c
o
d
e
s
 
(
p
l
e
n
t
y
 
f
o
r
 
y
e
a
r
s
)
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
3
.
 
A
P
I
 
+
 
D
a
t
a
 
M
o
d
e
l
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


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
P
O
S
T
 
/
s
h
o
r
t
e
n
 
{
 
l
o
n
g
_
u
r
l
,
 
a
l
i
a
s
?
 
}
 
→
 
{
 
s
h
o
r
t
_
u
r
l
 
}
"
,


 
 
 
 
 
 
"
G
E
T
 
/
:
c
o
d
e
 
→
 
3
0
1
 
r
e
d
i
r
e
c
t
 
t
o
 
l
o
n
g
_
u
r
l
"
,


 
 
 
 
 
 
"
T
a
b
l
e
:
 
u
r
l
s
(
s
h
o
r
t
_
c
o
d
e
 
P
R
I
M
A
R
Y
 
K
E
Y
,
 
l
o
n
g
_
u
r
l
,
 
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
,
 
u
s
e
r
_
i
d
?
,
 
e
x
p
i
r
e
s
_
a
t
?
)
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
4
.
 
H
i
g
h
-
l
e
v
e
l
 
D
i
a
g
r
a
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
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
C
l
i
e
n
t
 
→
 
C
D
N
 
→
 
L
B
 
→
 
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
i
c
e
 
→
 
C
a
c
h
e
 
(
R
e
d
i
s
)
 
→
 
D
a
t
a
b
a
s
e
 
(
P
o
s
t
g
r
e
s
 
/
 
D
y
n
a
m
o
D
B
)
.
"
,


 
 
 
 
 
 
"
R
e
d
i
r
e
c
t
 
p
a
t
h
 
i
s
 
c
a
c
h
e
-
f
i
r
s
t
;
 
D
B
 
i
s
 
t
h
e
 
c
o
l
d
 
t
a
i
l
.
"
,


 
 
 
 
 
 
"
S
h
o
r
t
-
c
o
d
e
 
g
e
n
e
r
a
t
i
o
n
:
 
c
o
u
n
t
e
r
-
b
a
s
e
d
 
+
 
b
a
s
e
6
2
 
(
o
r
 
h
a
s
h
 
+
 
c
o
l
l
i
s
i
o
n
-
c
h
e
c
k
)
.
"
,


 
 
 
 
]
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
 
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
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
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
,
 
a
p
p
l
i
e
d
 
t
o
 
T
i
n
y
U
R
L
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
u
n
 
t
h
e
 
f
r
a
m
e
w
o
r
k
 
f
r
o
m
 
L
1
.
4
 
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
 
p
r
o
m
p
t
 
&
l
d
q
u
o
;
d
e
s
i
g
n
 
a
 
U
R
L
 
s
h
o
r
t
e
n
e
r
&
r
d
q
u
o
;
.
 
E
v
e
r
y


 
 
 
 
 
 
 
 
c
a
s
e
 
s
t
u
d
y
 
f
r
o
m
 
L
8
 
f
o
l
l
o
w
s
 
t
h
e
 
s
a
m
e
 
s
t
r
u
c
t
u
r
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
 
1
2
 
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
s
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
s
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
 
s
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
0
4
e
m
"
 
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
u
l
 
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
:
 
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
 
0
,
 
l
i
s
t
S
t
y
l
e
:
 
"
n
o
n
e
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
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
t
e
m
s
.
m
a
p
(
(
i
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
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
 
8
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
 
8
0
0
 
}
}
>
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
>
{
i
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
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
 
T
A
B
 
2
 
-
 
A
n
i
m
a
t
e
d
 
r
e
d
i
r
e
c
t
 
p
a
t
h
 
w
i
t
h
 
c
a
c
h
e
 
h
i
t
 
r
a
t
i
o
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
H
i
t
 
{
 
i
d
:
 
n
u
m
b
e
r
;
 
c
a
c
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
 
l
a
t
e
n
c
y
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
 
C
A
C
H
E
_
H
I
T
_
R
A
T
E
 
=
 
0
.
9
2
;


c
o
n
s
t
 
C
A
C
H
E
_
L
A
T
E
N
C
Y
 
=
 
4
;


c
o
n
s
t
 
D
B
_
L
A
T
E
N
C
Y
 
=
 
3
8
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
d
i
r
e
c
t
F
l
o
w
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
h
i
t
s
,
 
s
e
t
H
i
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
H
i
t
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
 
i
d
R
e
f
 
=
 
u
s
e
R
e
f
(
0
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


 
 
 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
+
+
i
d
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
 
 
c
o
n
s
t
 
c
a
c
h
e
d
 
=
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
<
 
C
A
C
H
E
_
H
I
T
_
R
A
T
E
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
y
M
s
 
=
 
c
a
c
h
e
d
 
?
 
C
A
C
H
E
_
L
A
T
E
N
C
Y
 
+
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
2
 
:
 
D
B
_
L
A
T
E
N
C
Y
 
+
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
1
2
;


 
 
 
 
 
 
s
e
t
H
i
t
s
(
(
h
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
 
n
e
x
t
 
=
 
[
.
.
.
h
s
,
 
{
 
i
d
,
 
c
a
c
h
e
d
,
 
l
a
t
e
n
c
y
M
s
 
}
]
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
.
l
e
n
g
t
h
 
>
 
3
0
 
?
 
n
e
x
t
.
s
l
i
c
e
(
n
e
x
t
.
l
e
n
g
t
h
 
-
 
3
0
)
 
:
 
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
 
2
5
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
H
i
t
s
(
[
]
)
;
 
i
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;
 
}
;




 
 
c
o
n
s
t
 
h
i
t
C
o
u
n
t
 
=
 
h
i
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
h
)
 
=
>
 
h
.
c
a
c
h
e
d
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
 
m
i
s
s
C
o
u
n
t
 
=
 
h
i
t
s
.
l
e
n
g
t
h
 
-
 
h
i
t
C
o
u
n
t
;


 
 
c
o
n
s
t
 
h
i
t
R
a
t
e
 
=
 
h
i
t
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
 
(
h
i
t
C
o
u
n
t
 
/
 
h
i
t
s
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
 
h
i
t
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
 
h
i
t
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
.
l
a
t
e
n
c
y
M
s
,
 
0
)
 
/
 
h
i
t
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
e
 
r
e
d
i
r
e
c
t
 
p
a
t
h
 
i
s
 
9
0
%
+
 
c
a
c
h
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


 
 
 
 
 
 
 
 
E
v
e
r
y
 
s
h
o
r
t
 
l
i
n
k
 
i
s
 
r
e
a
d
 
f
a
r
 
m
o
r
e
 
t
i
m
e
s
 
t
h
a
n
 
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
 
w
r
i
t
t
e
n
.
 
W
i
t
h
 
R
e
d
i
s
 
i
n
 
f
r
o
n
t
 
o
f
 
t
h
e


 
 
 
 
 
 
 
 
D
B
,
 
t
h
e
 
s
t
e
a
d
y
-
s
t
a
t
e
 
h
i
t
 
r
a
t
e
 
i
s
 
9
0
-
9
5
%
.
 
T
h
e
 
D
B
 
s
e
e
s
 
o
n
l
y
 
t
h
e
 
l
o
n
g
 
t
a
i
l
 
o
f
 
c
o
l
d
 
c
o
d
e
s


 
 
 
 
 
 
 
 
a
n
d
 
t
h
e
 
t
r
i
c
k
l
e
 
o
f
 
n
e
w
 
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
 
n
o
d
e
s
 
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
0
0
}
 
w
=
{
1
2
0
}
 
h
=
{
5
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
"
G
E
T
 
/
a
B
3
x
Y
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
 
/
>


 
 
 
 
 
 
 
 
 
 
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
0
}
 
y
=
{
1
0
0
}
 
w
=
{
1
2
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
"
L
B
"
 
s
u
b
=
"
"
 
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
3
8
0
}
 
y
=
{
5
0
}
 
w
=
{
1
3
0
}
 
h
=
{
5
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
a
c
h
e
 
(
R
e
d
i
s
)
"
 
s
u
b
=
"
9
2
%
 
h
i
t
s
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
 
/
>


 
 
 
 
 
 
 
 
 
 
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
3
8
0
}
 
y
=
{
1
5
0
}
 
w
=
{
1
3
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
"
D
B
 
(
P
o
s
t
g
r
e
s
)
"
 
s
u
b
=
"
c
o
l
d
 
t
a
i
l
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
{
1
4
0
}
 
y
1
=
{
1
2
5
}
 
x
2
=
{
2
0
0
}
 
y
2
=
{
1
2
5
}
 
s
t
r
o
k
e
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
3
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
3
 
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
3
2
0
}
 
y
1
=
{
1
2
5
}
 
x
2
=
{
3
8
0
}
 
y
2
=
{
7
5
}
 
s
t
r
o
k
e
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
3
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
3
 
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
3
2
0
}
 
y
1
=
{
1
2
5
}
 
x
2
=
{
3
8
0
}
 
y
2
=
{
1
7
5
}
 
s
t
r
o
k
e
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
3
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
3
 
4
"
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
m
o
v
i
n
g
 
p
a
c
k
e
t
s
 
f
o
r
 
r
e
c
e
n
t
 
h
i
t
s
 
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
h
i
t
s
.
s
l
i
c
e
(
-
4
)
.
m
a
p
(
(
h
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
h
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
h
.
c
a
c
h
e
d
 
?
 
S
D
 
:
 
W
A
R
N
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
2
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
 
c
x
:
 
[
8
0
,
 
2
6
0
,
 
h
.
c
a
c
h
e
d
 
?
 
4
4
5
 
:
 
4
4
5
]
,
 
c
y
:
 
[
1
2
5
,
 
1
2
5
,
 
h
.
c
a
c
h
e
d
 
?
 
7
5
 
:
 
1
7
5
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
 
h
.
l
a
t
e
n
c
y
M
s
 
/
 
8
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
s
t
a
t
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
3
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
c
a
c
h
e
 
h
i
t
 
r
a
t
e
"
 
v
a
l
u
e
=
{
`
$
{
h
i
t
R
a
t
e
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
%
`
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
t
a
t
 
l
a
b
e
l
=
"
c
a
c
h
e
 
h
i
t
s
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
h
i
t
C
o
u
n
t
)
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
t
a
t
 
l
a
b
e
l
=
"
d
b
 
h
i
t
s
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
m
i
s
s
C
o
u
n
t
)
}
 
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
 
8
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
a
v
e
r
a
g
e
 
r
e
d
i
r
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
:
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
9
5
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
1
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
L
e
f
t
:
 
1
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
(
c
a
c
h
e
:
 
~
{
C
A
C
H
E
_
L
A
T
E
N
C
Y
}
m
s
 
·
 
d
b
:
 
~
{
D
B
_
L
A
T
E
N
C
Y
}
m
s
)


 
 
 
 
 
 
 
 
 
 
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
 
"
r
e
s
u
m
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


 
 
 
 
 
 
 
 
 
 
 
 
D
E
S
I
G
N
 
I
N
S
I
G
H
T


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
W
i
t
h
 
a
 
9
2
%
 
h
i
t
 
r
a
t
e
,
 
t
h
e
 
D
B
 
o
n
l
y
 
s
e
e
s
 
~
8
%
 
o
f
 
r
e
a
d
 
t
r
a
f
f
i
c
.
 
A
t
 
6
0
k
 
p
e
a
k
 
r
e
a
d
s
/
s
e
c
,


 
 
 
 
 
 
 
 
 
 
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
 
~
5
k
 
D
B
 
r
e
a
d
s
/
s
e
c
 
—
 
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
y
 
h
a
n
d
l
e
d
 
b
y
 
a
 
s
i
n
g
l
e
 
p
r
i
m
a
r
y
 
w
i
t
h
 
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
.


 
 
 
 
 
 
 
 
 
 
W
i
t
h
o
u
t
 
t
h
e
 
c
a
c
h
e
,
 
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
 
n
e
e
d
 
1
2
×
 
m
o
r
e
 
D
B
 
c
a
p
a
c
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
 
h
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
 
h
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
2
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
.
4
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
2
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
3
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
 
S
t
a
t
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
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
 
v
a
l
u
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
0
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
 
4
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
4
 
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
1
.
1
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
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
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
 
G
e
n
e
r
a
t
i
o
n
 
s
t
r
a
t
e
g
i
e
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
 
G
E
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
C
o
u
n
t
e
r
 
+
 
b
a
s
e
6
2
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


 
 
 
 
h
o
w
:
 
"
S
i
n
g
l
e
 
c
o
u
n
t
e
r
 
(
o
r
 
s
h
a
r
d
e
d
)
,
 
e
n
c
o
d
e
 
a
s
 
b
a
s
e
6
2
.
 
e
.
g
.
 
c
o
u
n
t
e
r
=
1
2
5
 
→
 
'
2
1
'
 
(
b
a
s
e
6
2
)
.
"
,


 
 
 
 
p
r
o
:
 
"
G
u
a
r
a
n
t
e
e
d
 
u
n
i
q
u
e
.
 
N
o
 
c
o
l
l
i
s
i
o
n
 
c
h
e
c
k
.
 
S
i
m
p
l
e
 
t
o
 
r
e
a
s
o
n
 
a
b
o
u
t
.
"
,


 
 
 
 
c
o
n
:
 
"
P
r
e
d
i
c
t
a
b
l
e
 
c
o
d
e
s
 
(
U
R
L
s
 
a
r
e
 
s
e
q
u
e
n
t
i
a
l
,
 
s
c
r
a
p
e
a
b
l
e
)
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
H
a
s
h
 
(
S
H
A
-
2
5
6
)
 
+
 
t
r
u
n
c
a
t
e
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


 
 
 
 
h
o
w
:
 
"
h
a
s
h
(
l
o
n
g
_
u
r
l
 
+
 
s
a
l
t
)
,
 
t
a
k
e
 
f
i
r
s
t
 
6
 
b
a
s
e
6
2
 
c
h
a
r
s
.
"
,


 
 
 
 
p
r
o
:
 
"
S
a
m
e
 
U
R
L
 
→
 
s
a
m
e
 
c
o
d
e
.
 
B
u
i
l
t
-
i
n
 
d
e
d
u
p
.
"
,


 
 
 
 
c
o
n
:
 
"
C
o
l
l
i
s
i
o
n
s
 
p
o
s
s
i
b
l
e
.
 
N
e
e
d
 
D
B
 
c
o
l
l
i
s
i
o
n
 
c
h
e
c
k
 
+
 
r
e
t
r
y
.
 
S
a
l
t
 
t
o
 
a
v
o
i
d
 
p
u
b
l
i
c
 
p
r
e
d
i
c
t
a
b
i
l
i
t
y
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
R
a
n
d
o
m
 
+
 
c
o
l
l
i
s
i
o
n
 
c
h
e
c
k
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


 
 
 
 
h
o
w
:
 
"
G
e
n
e
r
a
t
e
 
6
 
r
a
n
d
o
m
 
b
a
s
e
6
2
 
c
h
a
r
s
,
 
I
N
S
E
R
T
 
I
F
 
N
O
T
 
E
X
I
S
T
S
,
 
r
e
t
r
y
 
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
.
"
,


 
 
 
 
p
r
o
:
 
"
U
n
p
r
e
d
i
c
t
a
b
l
e
.
 
S
i
m
p
l
e
.
"
,


 
 
 
 
c
o
n
:
 
"
D
B
 
h
i
t
 
p
e
r
 
w
r
i
t
e
.
 
C
o
n
f
l
i
c
t
 
r
e
t
r
i
e
s
 
g
e
t
 
e
x
p
e
n
s
i
v
e
 
o
n
c
e
 
c
o
d
e
s
p
a
c
e
 
f
i
l
l
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
 
G
e
n
e
r
a
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
 
w
a
y
s
 
t
o
 
g
e
n
e
r
a
t
e
 
t
h
e
 
s
h
o
r
t
 
c
o
d
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


 
 
 
 
 
 
 
 
E
v
e
r
y
 
U
R
L
 
s
h
o
r
t
e
n
e
r
 
p
i
c
k
s
 
o
n
e
 
o
f
 
t
h
e
s
e
 
t
h
r
e
e
 
(
o
r
 
a
 
h
y
b
r
i
d
)
.
 
T
h
e
 
t
r
a
d
e
-
o
f
f
 
i
s
 
u
n
i
q
u
e
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
s
 
v
s
 
u
n
p
r
e
d
i
c
t
a
b
i
l
i
t
y
 
v
s
 
w
r
i
t
e
-
t
i
m
e
 
c
o
s
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
3
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
G
E
N
S
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
g
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
g
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
g
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
g
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
g
.
h
o
w
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
 
4
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
g
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
g
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
g
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


 
 
 
 
 
 
 
 
 
 
P
R
O
D
U
C
T
I
O
N
 
C
H
O
I
C
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


 
 
 
 
 
 
 
 
 
 
M
o
s
t
 
r
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
 
d
o
 
<
b
>
c
o
u
n
t
e
r
 
+
 
b
a
s
e
6
2
<
/
b
>
 
w
i
t
h
 
<
b
>
s
h
a
r
d
e
d
 
c
o
u
n
t
e
r
s
<
/
b
>
 
a
c
r
o
s
s
 
a
 
f
e
w


 
 
 
 
 
 
 
 
 
 
I
D
-
g
e
n
e
r
a
t
i
o
n
 
s
e
r
v
i
c
e
s
 
(
s
n
o
w
f
l
a
k
e
-
s
t
y
l
e
)
.
 
E
a
c
h
 
s
h
a
r
d
 
o
w
n
s
 
a
 
r
a
n
g
e
,
 
h
a
n
d
s
 
o
u
t
 
b
a
t
c
h
e
s


 
 
 
 
 
 
 
 
 
 
t
o
 
w
r
i
t
e
r
s
.
 
P
r
e
d
i
c
t
a
b
i
l
i
t
y
 
i
s
 
m
i
t
i
g
a
t
e
d
 
b
y
 
<
b
>
n
o
t
<
/
b
>
 
e
x
p
o
s
i
n
g
 
s
e
q
u
e
n
t
i
a
l
 
c
r
e
a
t
i
o
n
 
o
r
d
e
r


 
 
 
 
 
 
 
 
 
 
(
s
h
u
f
f
l
e
 
t
h
e
 
b
i
t
s
)
 
a
n
d
 
b
y
 
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
i
n
g
 
s
c
r
a
p
e
r
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
8
_
T
i
n
y
U
R
L
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
r
a
m
e
w
o
r
k
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
r
a
m
e
w
o
r
k
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
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
 
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
d
i
r
e
c
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
R
e
d
i
r
e
c
t
 
P
a
t
h
"
,
 
i
c
o
n
:
 
<
L
i
n
k
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
d
i
r
e
c
t
F
l
o
w
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
g
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
C
o
d
e
 
G
e
n
e
r
a
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
G
e
n
e
r
a
t
i
o
n
 
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
i
n
y
U
R
L
:
 
1
0
0
M
 
U
R
L
s
/
d
a
y
,
 
1
0
:
1
 
r
e
a
d
:
w
r
i
t
e
 
r
a
t
i
o
.
 
R
o
u
g
h
l
y
 
w
h
a
t
'
s
 
t
h
e
 
p
e
a
k
 
r
e
a
d
 
R
P
S
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
k
"
,
 
"
1
2
k
 
a
v
e
r
a
g
e
,
 
p
e
a
k
s
 
a
r
o
u
n
d
 
6
0
k
"
,
 
"
1
M
"
,
 
"
1
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
1
0
0
M
 
w
r
i
t
e
s
/
d
a
y
 
=
 
~
1
.
2
k
 
w
r
i
t
e
s
/
s
e
c
 
a
v
e
r
a
g
e
.
 
1
0
x
 
r
e
a
d
s
 
=
 
1
2
k
 
r
e
a
d
s
/
s
e
c
.
 
P
e
a
k
 
i
s
 
t
y
p
i
c
a
l
l
y
 
5
x
 
a
v
e
r
a
g
e
 
—
 
~
6
0
k
 
r
e
a
d
s
/
s
e
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
 
t
h
e
 
c
a
c
h
e
 
h
i
t
 
r
a
t
e
 
f
o
r
 
r
e
d
i
r
e
c
t
s
 
s
o
 
h
i
g
h
 
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
 
(
9
0
%
+
)
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
a
n
d
o
m
.
"
,


 
 
 
 
 
 
 
 
"
U
R
L
 
a
c
c
e
s
s
 
f
o
l
l
o
w
s
 
a
 
p
o
w
e
r
-
l
a
w
:
 
a
 
s
m
a
l
l
 
f
r
a
c
t
i
o
n
 
o
f
 
l
i
n
k
s
 
a
c
c
o
u
n
t
 
f
o
r
 
m
o
s
t
 
c
l
i
c
k
s
.
 
H
o
t
 
c
o
d
e
s
 
s
t
a
y
 
i
n
 
c
a
c
h
e
.
"
,


 
 
 
 
 
 
 
 
"
R
e
d
i
s
 
i
s
 
f
a
s
t
.
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
e
s
 
a
r
e
 
b
i
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
T
w
i
t
t
e
r
 
s
h
a
r
e
s
,
 
n
e
w
s
 
l
i
n
k
s
,
 
a
n
d
 
v
i
r
a
l
 
c
o
n
t
e
n
t
 
d
r
i
v
e
 
c
o
n
c
e
n
t
r
a
t
e
d
 
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
 
8
0
/
2
0
 
(
o
r
 
9
9
/
1
)
 
r
u
l
e
 
a
p
p
l
i
e
s
 
—
 
c
a
c
h
i
n
g
 
e
v
e
n
 
m
o
d
e
s
t
 
h
o
t
 
s
e
t
s
 
g
i
v
e
s
 
m
a
s
s
i
v
e
 
h
i
t
 
r
a
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
C
o
u
n
t
e
r
+
b
a
s
e
6
2
 
v
s
 
h
a
s
h
-
b
a
s
e
d
 
c
o
d
e
 
g
e
n
e
r
a
t
i
o
n
:
 
a
 
k
e
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
H
a
s
h
 
i
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
C
o
u
n
t
e
r
 
i
s
 
c
o
l
l
i
s
i
o
n
-
f
r
e
e
 
b
y
 
c
o
n
s
t
r
u
c
t
i
o
n
;
 
h
a
s
h
 
n
e
e
d
s
 
a
 
D
B
 
c
o
l
l
i
s
i
o
n
 
c
h
e
c
k
 
o
n
 
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
"
,


 
 
 
 
 
 
 
 
"
C
o
u
n
t
e
r
 
i
s
 
b
i
g
g
e
r
.
"
,


 
 
 
 
 
 
 
 
"
H
a
s
h
 
u
s
e
s
 
m
o
r
e
 
d
i
s
k
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
C
o
u
n
t
e
r
 
i
n
c
r
e
m
e
n
t
s
 
a
n
d
 
e
n
c
o
d
e
s
 
—
 
g
u
a
r
a
n
t
e
e
d
 
u
n
i
q
u
e
.
 
H
a
s
h
 
t
r
u
n
c
a
t
e
s
 
t
o
 
6
 
c
h
a
r
s
 
a
n
d
 
m
a
y
 
c
o
l
l
i
d
e
 
a
s
 
t
h
e
 
c
o
d
e
s
p
a
c
e
 
f
i
l
l
s
,
 
r
e
q
u
i
r
i
n
g
 
a
 
D
B
 
r
e
a
d
-
t
h
e
n
-
i
n
s
e
r
t
 
d
a
n
c
e
 
p
e
r
 
w
r
i
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
E
s
t
i
m
a
t
i
n
g
 
s
t
o
r
a
g
e
:
 
1
0
0
M
 
U
R
L
s
/
d
a
y
 
×
 
5
 
y
e
a
r
s
 
×
 
~
5
0
0
 
b
y
t
e
s
 
p
e
r
 
r
o
w
 
≈
 
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
 
G
B
"
,
 
"
A
b
o
u
t
 
9
0
 
T
B
"
,
 
"
1
 
P
B
"
,
 
"
1
0
 
G
B
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
1
0
0
M
 
×
 
3
6
5
 
×
 
5
 
×
 
5
0
0
 
≈
 
9
1
 
T
B
.
 
W
i
t
h
 
i
n
d
e
x
e
s
,
 
t
y
p
i
c
a
l
l
y
 
~
1
.
5
x
 
t
h
a
t
.
 
S
h
a
r
d
e
d
 
a
c
r
o
s
s
 
4
-
8
 
n
o
d
e
s
 
a
t
 
2
0
-
3
0
 
T
B
 
e
a
c
h
,
 
f
i
t
s
 
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
e
s
i
g
n
 
T
i
n
y
U
R
L
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
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
1
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
 
c
l
a
s
s
i
c
 
'
d
e
s
i
g
n
 
a
 
U
R
L
 
s
h
o
r
t
e
n
e
r
'
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
,
 
a
p
p
l
i
e
d
 
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


